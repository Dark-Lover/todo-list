export const state = {
  tasks: [],
};

// Create task function
export const createTask = function (objTask) {
  state.tasks.push(objTask);
};

// Delete task function
export const deleteTask = function (delId) {
  const newArr = state.tasks.filter((task) => task.id !== delId);
  state.tasks = newArr;
};

// Initialize localStorage
export const initLs = function () {
  if (localStorage.getItem("tasks")) {
    const lsData = JSON.parse(localStorage.getItem("tasks"));
    state.tasks = lsData;
    return 1;
  } else {
    console.log("LS dosnt exists");
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    return 0;
  }
};

// Update localStorage after an add or a delete
export const updateLs = function () {
  const testLs = JSON.parse(localStorage.getItem("tasks"));
  if (state.tasks.length === 0) localStorage.clear();
  else {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }
};
