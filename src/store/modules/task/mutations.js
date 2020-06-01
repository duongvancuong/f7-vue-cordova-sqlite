export default {
  ADD_TASK: (state, { status, task }) => {
    console.log("-----COMMIT ADD_TASK------");
    state.status = status;
    if (!!task) state.tasks.push(Object.assign({ ...task, startAt: task.startAt[0], endAt: task.endAt[0] }));
    console.log("-----END COMMIT ADD_TASK------");
  },
  DELETE_TASK: (state, { status, id }) => {
    console.log("-----COMMIT DELETE_TASK------");
    state.status = status;

    if (!!id) {
      const index = state.tasks.findIndex(t => t.id === id);
      state.tasks.splice(index, 1);
    }

    console.log("-----END COMMIT DELETE_TASK------");
  },
  EDIT_TASK: (state, { status, task }) => {
    console.log("-----COMMIT EDIT_TASK------");

    state.status = status;

    if (!!task) {
      const index = state.tasks.findIndex(t => t.id === task.id);
      state.tasks[index] = Object.assign({ ...task, startAt: task.startAt[0], endAt: task.endAt[0] });
    }

    console.log("-----END COMMIT EDIT_TASK------");
  },
  FETCH_TASKS: (state, { status, tasks }) => {
    console.log("-----COMMIT FETCH_TASKS------");
    state.status = status;
    state.tasks = tasks;
    console.log("-----END COMMIT FETCH_TASKS------");
  },
};

