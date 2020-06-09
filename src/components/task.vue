<template>
  <f7-list media-list inset>
    <f7-list-item 
      :title="taskTitle" 
      :subtitle="subTitle"
      :badge="status"
      :badge-color="colorStatus()"
      swipeout
    >
      <img slot="media" src="static/icons/check_1.svg" width="44" />
      <f7-swipeout-actions left>
        <f7-swipeout-button color="green" @click="() => updateStatus('done')">
          Done
        </f7-swipeout-button>
        <f7-swipeout-button color="yellow" @click="() => updateStatus('doing')">
          Doing
        </f7-swipeout-button>
        <f7-swipeout-button color="blue" @click="() => updateStatus('todo')">
          Todo
        </f7-swipeout-button>
      </f7-swipeout-actions>

      <f7-swipeout-actions right>
        <f7-swipeout-button color="green" @click="showEdit">
          Edit
        </f7-swipeout-button>

        <f7-swipeout-button color="red" @click="deleteTask">
          Delete
        </f7-swipeout-button>
      </f7-swipeout-actions>
    </f7-list-item>
  </f7-list>
</template>
<style lang="scss">
</style>
<script>
export default { 
  props : {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    showEdit: {
      type: Function,
      required: false,
      default: () => {},
    },
    deleteTask: {
      type: Function,
      required: false,
      default: () => {},
    },
    updateStatus: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      taskTitle: this.title,
      subTitle: this.subtitle,
      taskStatus: this.status,
    };
  },
  methods: {
    colorStatus() {
      if (this.taskStatus === 'done') return 'green';
      if (this.taskStatus === 'doing') return 'yellow';
      if (this.taskStatus === 'todo') return 'blue';
    },
  },
}  
</script>
