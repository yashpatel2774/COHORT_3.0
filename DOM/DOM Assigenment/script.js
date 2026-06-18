let taskInput = document.getElementById("taskInput");
let category = document.getElementById("category");
let addBtn = document.getElementById("addBtn");
let taskContainer = document.getElementById("taskContainer");

let id = 1;

// Add Task

addBtn.addEventListener("click", () => {

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    let task = document.createElement("div");
    task.classList.add("task");

    // Custom Data Attributes
    task.setAttribute("data-id", id++);
    task.setAttribute("data-status", "pending");
    task.setAttribute("data-category", category.value);

    let title = document.createElement("h3");
    let text = document.createTextNode(taskInput.value);
    title.append(text);

    let cat = document.createElement("p");
    cat.innerText = "Category : " + category.value;

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit");

    let completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.classList.add("complete");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("delete");

    task.append(title);
    task.append(cat);
    task.append(editBtn);
    task.append(completeBtn);
    task.append(deleteBtn);

    taskContainer.append(task);

    taskInput.value = "";
});


// Event Delegation

taskContainer.addEventListener("click", (e) => {

    let task = e.target.closest(".task");

    if (!task) return;

    // Delete Task
    if (e.target.classList.contains("delete")) {
        task.remove();
    }

    // Complete Task
    if (e.target.classList.contains("complete")) {

        task.classList.toggle("completed");

        if (task.classList.contains("completed")) {
            task.setAttribute("data-status", "completed");
        } else {
            task.setAttribute("data-status", "pending");
        }

        console.log(task.getAttribute("data-status"));
    }

    // Edit Task
    if (e.target.classList.contains("edit")) {

        let currentTask =
            task.querySelector("h3").innerText;

        let newTask =
            prompt("Edit Task", currentTask);

        if (newTask) {
            task.querySelector("h3").innerText = newTask;
        }
    }
});


// Attributes vs Properties

document
    .getElementById("showDiff")
    .addEventListener("click", () => {

        let input =
            document.getElementById("demoInput");

        document
            .getElementById("result")
            .innerHTML =
            "Property Value : " + input.value +
            "<br>" +
            "Attribute Value : " +
            input.getAttribute("value");
    });


// hasAttribute Example

console.log(
    document
        .getElementById("demoInput")
        .hasAttribute("value")
);


// Event Bubbling

document
    .getElementById("grandparent")
    .addEventListener("click", () => {
        console.log("Grandparent");
    });

document
    .getElementById("parent")
    .addEventListener("click", () => {
        console.log("Parent");
    });

document
    .getElementById("child")
    .addEventListener("click", () => {
        console.log("Child");
    });


// Event Capturing

document
    .getElementById("grandparent")
    .addEventListener(
        "click",
        () => {
            console.log("Grandparent Capture");
        },
        true
    );

document
    .getElementById("parent")
    .addEventListener(
        "click",
        () => {
            console.log("Parent Capture");
        },
        true
    );

document
    .getElementById("child")
    .addEventListener(
        "click",
        () => {
            console.log("Child Capture");
        },
        true
    );
