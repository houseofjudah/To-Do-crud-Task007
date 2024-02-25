let addToDoButton = document.getElementById("addToDo");
let toDoContainer = document.getElementById("toDocontainer");
let inputField = document.getElementById("inputspace");

addToDoButton.addEventListener("click", function(){
    var paragragh = document.createElement("p");
    paragragh.classList.add("text-styling");
    paragragh.innerText = inputField.value;
    toDoContainer.appendChild(paragragh);
    inputField.value = "";

    paragragh.addEventListener("click", function(){
        paragragh.style.textDecoration = "line-through";
    })

    paragragh.addEventListener("dblclick", function(){
        paragragh.appendChild(paragragh);
        paragragh.value ="";
    })
    paragragh.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragragh);
    })


})


// var paragragh = document.getElementById("text-styling");
// paragragh.innerText = "Updated-content";
// paragragh.textContent = "Updated-content";

// paragragh.setAttribute("data-id","new-value");