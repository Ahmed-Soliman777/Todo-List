var x = document.querySelectorAll(".test"),
    y = document.querySelector("#testID"),
    z = document.querySelector("#user_input")


// console.log(x)
// console.log(y)
// console.log(y.getAttribute("placeholder"))
// console.log(z)


function run() {
    // y.setAttribute("from-js", "Hello from JS")
    // y.innerHTML = "<p>I am from JS</p>"
    // y.textContent = "<p>I am from JS</p>"

    console.log(y.innerHTML)
    console.log(y.outerHTML)

    // console.log(z.value)
}


var taskInput = document.querySelector("#task_input"),
    output = document.querySelector("#output")


function addTask() {
    output.innerHTML += `<li>${taskInput.value}</li>`;
    taskInput.value = "";
    taskInput.focus();
}


var myJsElement = document.createElement("div"),
    myText = document.createTextNode("This is from JS"),
    myComment = document.createComment("This is comment from JS");

myJsElement.append(myText)

myJsElement.id = "fromJs"

myJsElement.appendChild(myComment)

y.appendChild(myJsElement)


console.log(myJsElement)

console.log(y.children)
console.log(y.childNodes)


y.style.backgroundColor = "#e3e3e3"
/////////////////////////////////////
console.log(document.forms)
console.log(document.images)
console.log(document.links)
