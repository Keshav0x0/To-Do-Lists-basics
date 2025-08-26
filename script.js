let count=1;
let listCount=1;
let listNumber=0;
document.querySelector("#add").addEventListener("click", function () {
  
    let container=document.querySelector(".lists-container");
    listNumber++;
    let inputField = document.getElementById("input-value");
    let inputValue = inputField.value;

      if (inputValue === ""){
        alert("Type a task to record");
        return;
      };

    document.getElementsByClassName("empty-box")[0].style.display="none";
    let allList = document.querySelector(".list");

    let list = document.createElement("div");
    list.id ="list-content-" +listCount++;
    list.classList.add("list-content");
    

    let checkbox = document.createElement("input");
    checkbox.id = "checkbox";
    checkbox.classList.add("checkbox-round");
    checkbox.type="checkbox";
    checkbox.style.borderRadius="50%";
    checkbox.style.margin="5px";


    let work = document.createElement("span");
    work.id = "work";
    work.classList.add("work");
    inputValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
    work.textContent = inputValue;

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("btnContainer");

    let updateBtn = document.createElement("button");
    updateBtn.id = "update";
    updateBtn.classList.add("btn");

    let deleteBtn = document.createElement("button");
    deleteBtn.id = "delete";
    deleteBtn.classList.add("btn");
    deleteBtn.style.marginLeft="-12px";


    let pen_icon = document.createElement("i");
    pen_icon.classList.add("fa-solid", "fa-pen-to-square");

    let trash_icon = document.createElement("i");
    trash_icon.classList.add("fa-solid", "fa-xmark");

    updateBtn.append(pen_icon);
    deleteBtn.append(trash_icon);

    list.append(checkbox);
    list.append(work);
    list.append(btnDiv);
    btnDiv.append(updateBtn);
    btnDiv.append(deleteBtn);
    container.append(list);

   checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
        work.style.color = "grey";
        work.style.textDecoration = "line-through";
    } else {
        work.style.color = "black";
        work.style.textDecoration = "none";
    }
});


    inputField.value = "";

    //update
    currentUpdateWork=null;
    updateBtn.addEventListener("click",function(){
        document.getElementsByClassName("add-list")[0].style.display="none";
        document.getElementsByClassName("update-list")[0].style.display="flex";
        let updateValue=document.getElementById("update-value");
        updateValue.value=work.textContent;

        currentUpdateWork=work;
    });
        let updateToDo_btn=document.getElementById("updateToDo").addEventListener("click",()=>{
        if(currentUpdateWork){
            currentUpdateWork.textContent=document.getElementById("update-value").value;
            currentUpdateWork=null;

        document.getElementsByClassName("add-list")[0].style.display="flex";
        document.getElementsByClassName("update-list")[0].style.display="none";
        }
    });
    
    //delete
    deleteBtn.addEventListener("click",function(){
        list.remove();
        listNumber--;
        if(listNumber==0){
             document.getElementsByClassName("empty-box")[0].style.display="flex";
             count=1;
        }
         document.getElementsByClassName("add-list")[0].style.display="flex";
        document.getElementsByClassName("update-list")[0].style.display="none";
    });
});