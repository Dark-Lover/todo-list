export const state = {
  //   task: { id: "", name: "", desc: "" },
  tasks: [],
};

export const createTask = function (objTask) {
  //   state.task.id = objTask.id;
  //   state.task.name = objTask.name;
  //   state.task.desc = objTask.desc;
  state.tasks.push(objTask);
};

export const deleteTask = function (delId) {
  const newArr = state.tasks.filter((task) => task.id !== delId);
  state.tasks = newArr;
};
