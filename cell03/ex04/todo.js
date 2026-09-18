window.onload = function() {
    loadCookies();
};

function addTodo() {
    let task = prompt("Please enter a new TO DO:");
    
    if (task !== null && task.trim() !== "") {
        createTodoElement(task);
        saveCookies(); 
    }
}

function createTodoElement(taskText) {
    let ft_list = document.getElementById("ft_list");
    

    let newDiv = document.createElement("div");
    newDiv.textContent = taskText;


    newDiv.onclick = function() {

        let isConfirmed = confirm("Do you really want to remove this TO DO?");
        if (isConfirmed) {
            this.remove(); 
            saveCookies(); 
        }
    };

    ft_list.insertBefore(newDiv, ft_list.firstChild);
}

function saveCookies() {
    let ft_list = document.getElementById("ft_list");
    let tasks = [];
    let children = ft_list.children;

    for (let i = 0; i < children.length; i++) {
        tasks.push(encodeURIComponent(children[i].textContent));
    }

    let jsonString = JSON.stringify(tasks);
    document.cookie = "todo_list=" + jsonString + "; path=/; max-age=86400"; 
}

function loadCookies() {
    let name = "todo_list=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');

    for (let i = 0; i < cookieArray.length; i++) {
        let c = cookieArray[i].trim();
        if (c.indexOf(name) === 0) {
            let jsonString = c.substring(name.length, c.length);
            if (jsonString) {
                let tasks = JSON.parse(jsonString);
                for (let j = tasks.length - 1; j >= 0; j--) {
                    createTodoElement(decodeURIComponent(tasks[j]));
                }
            }
            return;
        }
    }
}