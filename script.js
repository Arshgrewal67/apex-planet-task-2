// Apply Form Validation
document.getElementById("applyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const resume = document.getElementById("resume").files[0];

    // Form Validation
    if (name === "" || email === "" || !resume) {
        alert("All fields must be filled out!");
        return;
    }

    // Email Validation (basic format)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Application submitted successfully!\nName: ${name}\nEmail: ${email}`);
    document.getElementById("applyForm").reset();
});

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const contactName = document.getElementById("contact-name").value;
    const contactEmail = document.getElementById("contact-email").value;
    const message = document.getElementById("message").value;

    if (contactName === "" || contactEmail === "" || message === "") {
        alert("All fields must be filled out!");
        return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(contactEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert(`Message sent successfully!\nName: ${contactName}\nEmail: ${contactEmail}`);
    document.getElementById("contactForm").reset();
});

// To-Do List Functionality
const addTodoButton = document.getElementById("add-todo-btn");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

addTodoButton.addEventListener("click", function() {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${todoText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    todoList.appendChild(li);
    todoInput.value = "";
});

// Remove Task Function
function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}
