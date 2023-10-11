if(typeof(Storage)!=="undefined") {
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    diplayTask();

    function addTask() {
        var task = document.getElementById("task");
        var taskItem = task.value;

        tasks.push(taskItem);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        task.value = "";
        diplayTask();
    }

    function diplayTask() {
        var listItem = document.getElementById("taskList");
        listItem.innerHTML = "";

        for(var i = 0; i < tasks.length; i++) {
            var li = document.createElement("li");
            li.textContent = tasks[i];

            var deleteButton = document.createElement("button");
            deleteButton.innerHTML="DEL";
            deleteButton.setAttribute("id",i);
            deleteButton.onclick = deleteTask;
            li.appendChild(deleteButton);
            listItem.appendChild(li);
        }
    }
    
    function deleteTask() {
        var index = parseInt(this.getAttribute("id"));
        console.log(index)
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        diplayTask();
    }
}
else {
    alert("Your potato pc doesn't support Local Storage");
}