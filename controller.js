import * as Model from "./model.js";
import ListView, * as listFunc from "./views/listView.js";

// View Controller for adding Tasks
const viewController = function () {
  const newData = ListView.getTask();
  if (newData === undefined) return;
  Model.createTask(newData);
  updateUi();
};

// Update Ui
const updateUi = function () {
  ListView.setTask(Model.state.tasks);
  Model.updateLs();
  ListView.showTask();
};

// View Controller for deleting Tasks
const deletController = function (id) {
  Model.deleteTask(id);
  updateUi();
};

// Init function that runs once
const init = function () {
  ListView.addTaskHandler(viewController);
  ListView.deleteTaskHandler(deletController);
  if (Model.initLs()) {
    updateUi();
    // ListView.data = Model.state.tasks;
    // ListView.showTask();
  }
};

init();
