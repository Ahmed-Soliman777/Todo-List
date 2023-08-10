var btn = document.getElementById("click-btn"),
    text = document.getElementById("click-text"),
    output = document.getElementById("todo-list"),
    task = document.getElementById("task-div"),
    fin = document.getElementById("finish-div")

btn.addEventListener("click",function(){
    if (text.value === ""){
        alert("no")
    }
    else{
        addNewTask()
        finishTask()
        afterTask()
        counter()
        deleteTask()
    }
})
function addNewTask(){
    output.innerHTML += `
        <li class="d-flex justify-content-between">
            <div>${text.value}</div>
            <a href="#" class="delete-id">delete</a>
        </li>`
}
function finishTask(){
    for (let index = 0; index < output.children.length; index++) {
        const task = output.children[index]; 
        task.addEventListener("click",function(){
            task.classList.toggle("finished")
            count()
        })
    }
}
function afterTask(){
    text.focus()
    text.value = ""
}
function counter(){
    task.innerHTML = output.children.length
}
function count(){
    t = document.getElementsByClassName("finished")
    fin.innerHTML = t.length
}

function deleteTask(){
    var delet = document.getElementsByClassName("delete-id")
    
    for (let index = 0; index < delet.length; index++) {
        const element = delet[index];
        element.addEventListener("click",function(e){
            e.stopPropagation();
            element.parentElement.remove()
            counter()
            count()
        })
    }
}