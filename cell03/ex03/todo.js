window.onload = function() {
    loadTodos();
};

function newTodo() {
    let task = prompt("Enter a new TO DO:");
    if (task !== null && task.trim() !== "") {
        addTodoToDOM(task);
        saveTodos(); 
    }
}

function addTodoToDOM(text) {
    let ft_list = document.getElementById("ft_list");

    let newDiv = document.createElement("div");
    newDiv.className = "todo-item";
    newDiv.textContent = text;
    
    newDiv.onclick = function() {
        let confirmDelete = confirm("Do you want to remove this TO DO?");
        if (confirmDelete) {
            newDiv.remove(); 
            saveTodos();     
        }
    };
    
    ft_list.insertBefore(newDiv, ft_list.firstChild);
}

function saveTodos() {
    let tasks = [];
    let items = document.querySelectorAll(".todo-item");
    
    items.forEach(item => {
        tasks.push(item.textContent);
    });
    
    let jsonTasks = encodeURIComponent(JSON.stringify(tasks));
    

    document.cookie = "todos=" + jsonTasks + "; max-age=86400; path=/";
}


function loadTodos() {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        if (cookie.startsWith("todos=")) {
            let jsonString = decodeURIComponent(cookie.substring("todos=".length));
            if (jsonString) {
                try {
                    let tasks = JSON.parse(jsonString);
              
                    for (let j = tasks.length - 1; j >= 0; j--) {
                        addTodoToDOM(tasks[j]);
                    }
                } catch (e) {
                    console.error("Error parsing cookies: ", e);
                }
            }
        }
    }
}