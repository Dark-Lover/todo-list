class ListView {
  #parentEl = document.getElementById("mylist");
  #id = 0;
  data;
  // Get task
  getTask() {
    const name = document.getElementById("title").value;
    const desc = document.getElementById("desc").value;
    if (name === "" || desc === "") return;
    else {
      const taskObj = {
        id: this.#id + 1,
        name: name,
        desc: desc,
      };
      this.#id += 1;
      return taskObj;
    }
  }
  // Set Task
  setTask(data) {
    this.data = data;
  }
  // Show Task
  showTask() {
    this.clear();
    this.data.forEach((el) => {
      this.#parentEl.innerHTML += `<li class='list_item' data-id=${el.id}><a class='link' >${el.id}: ${el.name}, ${el.desc} </a><i class="far fa-trash-alt"></i></li>`;
    });
  }
  // Clear
  clear() {
    this.#parentEl.innerHTML = "";
  }

  // Adding handler
  addTaskHandler(handler) {
    const btn = document.querySelector("#add_item");
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      handler();
    });
  }

  // Deleting handler
  deleteTaskHandler(handler) {
    this.#parentEl.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.classList.contains("far")) {
        const idToDel = e.target.closest(".list_item").dataset.id;
        handler(+idToDel);
      }
    });
  }
}

export default new ListView();
