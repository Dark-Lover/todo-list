const list=document.getElementById('mylist'),
input_task=document.getElementById('input_text'),
submit_btn=document.getElementById('add_item'),
card=document.getElementById('card');

card.addEventListener('click',function(e){
     let mytarget=e.target.className;
    if(mytarget=== 'far fa-window-close'){
        let element=e.target.parentElement.firstChild.innerText;
          e.target.parentElement.remove();
        deleteElement(element);
     }
    e.preventDefault();
})

if(localStorage.getItem('tasks') !== null){
   let myLs=JSON.parse(localStorage.getItem('tasks'));
   myLs.forEach(function(element){
       addToList(element);
   })
   console.log(myLs);
}

submit_btn.addEventListener('click',function(e){
    let item=input_task.value;
    if(item !== ''){
        addToLs(item);
        addToList(item);
    }
    else{
        alert("Input empty");
    }

    e.preventDefault();
})

// Add to Local storage
function addToLs(task){

    if(localStorage.getItem('tasks') === null){
        let mytasks=[];
        mytasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(mytasks));
    }else{
        let mytasks=JSON.parse(localStorage.getItem('tasks'));
        mytasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(mytasks));
    }
    input_task.value='';
}

// Add to Menu List
function addToList(task){
      let li=document.createElement('li'),
      link=document.createElement('a');
      link.innerText=task;
      close_icon=document.createElement('i');
      close_icon.className='far fa-window-close';
      li.appendChild(link);
      li.appendChild(close_icon);
      list.appendChild(li);
}

// Delete element from both list and Local storage

function deleteElement(element){
    let mytasks=JSON.parse(localStorage.getItem('tasks'));
    mytasks.forEach(function(task,index){
        if(task===element){
            mytasks.splice(index,1);
        }
    })
    localStorage.setItem('tasks',JSON.stringify(mytasks));
}