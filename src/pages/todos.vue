<template>
  <f7-page name="todos">
    <f7-navbar title="Task" back-link="Back"></f7-navbar>
    <f7-block-title>List Tasks</f7-block-title>
    <Task 
      v-if="status === 'done'"
      v-for="task in tasks"
      :key="task.id"
      name="task"
      :title="task.title" 
      :subtitle="formatDate(task.startAt, task.endAt)" 
      :status="task.status"
      :showEdit="() => showEdit(task)"
      :deleteTask="() => onDeleted(task)"
      :updateStatus="(status) => updateStatus(task, status)"
    />

    <f7-popup :opened="popupOpened" @popup:closed="closePopup" swipe-to-close>
      <f7-page>
        <f7-navbar>
          <f7-nav-left>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-left>
          <f7-nav-title>Add Task</f7-nav-title>
          <f7-nav-right>
            <f7-link v-if="mode !== 'edit'" @click="onClick">Save</f7-link>
            <f7-link v-if="mode === 'edit'" @click="handleEditTask">Edit</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-list inset>
          <f7-list-input
            outline
            label="Title"
            floating-label
            :value="task.title"
            @input="task.title = $event.target.value"
            type="text"
            placeholder="Add new task"
            clear-button></f7-list-input>
          <f7-list-input
            outline
            label="Detail"
            floating-label
            :value="task.detail"
            @input="task.detail = $event.target.value"
            type="textarea"
            clear-button
            placeholder="Detail"></f7-list-input>
          <f7-list-input
            outline
            label="Start At"
            floating-label
            type="datepicker"
            :value="task.startAt"
            @calendar:change="(value) => task.startAt = value"
            placeholder="Start At"
            clear-button
            readonly></f7-list-input>
          <f7-list-input
            outline
            label="End At"
            floating-label
            type="datepicker"
            :value="task.endAt"
            @calendar:change="(value) => task.endAt = value"
            placeholder="End At"
            clear-button
            readonly></f7-list-input>
          <f7-list-input
            outline
            floating-label
            label="Status"
            type="select"
            defaultValue="todo"
            :value="task.status"
            @input="task.status= $event.target.value"
            placeholder="Please choose..." >
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </f7-list-input>
        </f7-list>
      </f7-page>
    </f7-popup>
    
    <f7-fab position="right-bottom" slot="fixed" >
      <f7-icon ios="f7:pencil" aurora="f7:pencil" md="material:pencil"></f7-icon>
      <f7-icon ios="f7:pencil_slash" aurora="f7:pencil_slash" md="material:pencil_slash"></f7-icon>
      <f7-fab-buttons position="top">
        <f7-fab-button label="Add" @click="popupopened = true; mode = 'add'">
          <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
        </f7-fab-button>
        <f7-fab-button label="done" @click="() => actionGetByStatus('done')">
          <f7-icon ios="f7:text_badge_checkmark" aurora="f7:text_badge_checkmark" md="material:text_badge_checkmark"></f7-icon>
        </f7-fab-button>
        <f7-fab-button label="doing" @click="() => actionGetByStatus('doing')">
          <f7-icon ios="f7:text_badge_star" aurora="f7:text_badge_star" md="material:text_badge_star"></f7-icon>
        </f7-fab-button>
        <f7-fab-button label="todo" @click="() => actionGetByStatus('todo')">
          <f7-icon ios="f7:text_badge_plus" aurora="f7:text_badge_plus" md="material:text_badge_plus"></f7-icon>
        </f7-fab-button>
      </f7-fab-buttons>
    </f7-fab>
  </f7-page>
</template>
<script>
  import { mapState, mapActions } from 'Vuex';
  import Task from '../components/task.vue';

  export default {
    components: {
      Task,
    },
    data() {
      return { 
        popupOpened: false,
        newTodoTitle: '',
        task: {
          title: '',
          detail: '',
          startAt: [new Date()],
          endAt: [new Date()],
          status: 'todo',
        },
        mode: '',
      };
    },
    computed: {
      ...mapState("task", {
        tasks: state => state.tasks,
        status: state => state.status,
      }),
    },
    watch: {
      status: function(val, oldVal) {
        console.log("----Watching status ----");
        console.log("Status is:" + val);
        if (val === 'done') {
          this.$f7.preloader.hide();
        }
        if (["create", "update", "loading", "delete"].includes(val) && oldVal === 'done') {
          this.$f7.preloader.show();
        }
        if (val === 'done' && ["delete","create", "update", "loading"].includes(oldVal)) {
          this.task = {
            title: '',
            detail: '',
            startAt: [new Date()],
            endAt: [new Date()],
            status: 'todo',
          };
          this.popupOpened = false;
        } 
      },
    },
    mounted() {
      this.actionFetch();
    }, 
    methods: {
      formatDate(startAt, endAt) {
        const _startAt = new Date(startAt);
        const _endAt = new Date(endAt);
        return `${_startAt.toLocaleDateString()} ~ ${_endAt.toLocaleDateString()}`;  
      },
      updateStatus(task, status) {
        this.task = Object.assign({ 
          ...task, 
          startAt: [ new Date(task.startAt) ], 
          endAt: [ new Date(task.endAt) ],
          status,
        });
        this.actionEdit(this.task);
      },
      closePopup() {
        this.popupOpened = false;
        this.task = {
          title: '',
          detail: '',
          startAt: [new Date()],
          endAt: [new Date()],
          status: 'todo',
        };
      },
      onClick(e) {
        const self = this;
        self.actionAdd(self.task);
      },
      onDeleted(task) {
        const app = this.$f7;
        this.actionDelete(task);
        app.dialog.alert('Task is removed!', 'Deleted Task');
      },
      showEdit(task) {
        const self = this;

        self.mode = 'edit';
        self.task = Object.assign({ 
          ...task, 
          startAt: [ new Date(task.startAt) ], 
          endAt: [ new Date(task.endAt) ],
        });
        self.popupOpened = true;
      },
      handleEditTask() {
        const self = this;
        self.actionEdit(self.task);
      },
      ...mapActions("task", ["actionGetByStatus", "actionAdd", "actionDelete", "actionEdit", "actionFetch"])
   },
  };
</script>

