<template>
  <f7-page name="about">
    <f7-navbar title="Todos" back-link="Back"></f7-navbar>
    <f7-block-title>List Tasks</f7-block-title>
    <f7-list>
      <f7-list-item 
        v-for="task in todos"
        :key="task.id"
        checkbox 
        :title="task.title"
        name="task"
        :id="task.id"
        :checked="task.status === 'done'"
        swipeout
        @swipeout:delete="onDeleted(task)"
      >
        <f7-swipeout-actions right>
          <f7-swipeout-button color="green" @click="showEdit(task)">
            Edit
          </f7-swipeout-button>

          <f7-swipeout-button delete overswipe>
            Delete
          </f7-swipeout-button>
        </f7-swipeout-actions>
      </f7-list-item>
    </f7-list>

    <f7-popup class="add-todo" :opened="popupOpened" @popup:closed="closePopup" swipe-to-close>
      <f7-page>
        <f7-navbar title="Add Todo">
          <f7-nav-right>
            <f7-link popup-close>Close</f7-link>
          </f7-nav-right>
        </f7-navbar>
        <f7-block>
          <f7-input
            v-on:keypress="onClick"
            :value="task.title"
            @input="task.title = $event.target.value"
            type="text"
            placeholder="Add new todo"
            clear-button
          /></f7-input>
          <br>
          <f7-button large small fill v-if="mode !== 'edit'" v-on:click="onClick">Add todo</f7-button>
          <f7-button large small fill v-if="mode === 'edit'" v-on:click="handleEditTask">Edit todo</f7-button>
        </f7-block>
      </f7-page>
    </f7-popup>
    
    <f7-fab position="right-bottom" slot="fixed" @click="popupOpened = true; mode = 'add'">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
      <f7-icon ios="f7:xmark" aurora="f7:xmark" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>
<script>
  import { mapState, mapActions } from 'Vuex';

  export default {
    data() {
      return { 
        popupOpened: false,
        newTodoTitle: '',
        task: {
          title: '',
          id: '',
          status: 'todo',
        },
        mode: '',
      };
    },
    computed: {
      ...mapState({
        todos: state => state.todos,
      })
    },
    methods: {
      closePopup() {
        this.popupOpened = false;
        this.task = { title: '', status: 'todo' };
      },
      onClick(e) {
        const self = this;
        const id = Math.floor(Date.now() / 1000);
        self.addTodo({ ...self.task, id });
        self.task = { title: '', status: 'todo' };
        self.popupOpened = false;
      },
      onDeleted(task) {
        const app = this.$f7;
        this.deleteTask(task);
        app.dialog.alert('Task is removed!', 'Deleted Task');
      },
      showEdit(task) {
        const self = this;
        const app = this.$f7;

        self.mode = 'edit';
        self.task = task;
        self.popupOpened = true;
      },
      handleEditTask() {
        const self = this;
        const app = this.$f7;

        self.editTask(self.task);
        self.task = { title: '', status: 'todo' };
        self.popupOpened = false;
        app.dialog.alert('Task is edited!', 'Edit Task');
      },
      ...mapActions(["addTodo", "deleteTask", "editTask"])
   },
  };
</script>

