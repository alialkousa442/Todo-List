const renderProjects = (manager) => {
    const projects_list = document.getElementById('projects-list');
    projects_list.textContent = "";
    const projects = manager.getProjects();
    for (let index = 0; index < projects.length; index++) {
        const list = document.createElement('li');
        list.textContent = projects[index].name;
        if (projects[index] === manager.getCurrentProject()) {
            list.classList.add('active')
        }
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '🗑️';
        if (projects[index].name != 'Default') {
            list.appendChild(deleteBtn);
        }
        projects_list.appendChild(list);


    }

}
const renderTodos = (project) => {
    const current_title = document.getElementById('current-project-title');
    current_title.textContent = project.name;
    const todos_list = document.getElementById('todos-list');
    todos_list.textContent = "";
    const tasks = project.tasks;
    for (let index = 0; index < tasks.length; index++) {
        const task = document.createElement('div');
        const title = document.createElement('h3');
        const dueDate = document.createElement('h4');
        const priority = document.createElement('h4');
        const description = document.createElement('p');
        const isCompleted = document.createElement('button');
        const deleteTask = document.createElement('button');
        title.textContent = tasks[index].title;
        dueDate.textContent = tasks[index].dueDate;
        priority.textContent = tasks[index].priority;
        description.textContent = tasks[index].description;
        isCompleted.classList.add("completed");
        deleteTask.classList.add('delete-task');
        if (tasks[index].completed === true)
            isCompleted.textContent = "☑️";
        else isCompleted.textContent = "🔳";
        deleteTask.textContent="X";
        task.appendChild(title);
        task.appendChild(dueDate);
        task.appendChild(priority);
        task.appendChild(description);
        task.appendChild(isCompleted);
        task.appendChild(deleteTask);
        todos_list.appendChild(task);

    }
}