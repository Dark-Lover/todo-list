import * as Model from "./model.js";
import ListView, * as listFunc from "./views/listView.js";

const viewController = function () {
  const newData = ListView.getTask();
  if (newData === undefined) return;
  Model.createTask(newData);
  ListView.data = Model.state.tasks;
  ListView.showTask();
};

const deletController = function (id) {
  Model.deleteTask(id);
  ListView.data = Model.state.tasks;
  ListView.showTask();
};

const init = function () {
  ListView.addTaskHandler(viewController);
  ListView.deleteTaskHandler(deletController);
};

init();

/*   
Still to do:
    - Add todo List to Local storage
*/
