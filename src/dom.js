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



const add_project=document.getElementById('add-project-btn');
const add_task=document.getElementById('add-task-btn');
const form_project=document.getElementById('add-project-form');
const form_task=document.getElementById('add-todo-form');
const cancel_project=document.getElementById('cancel-project-btn');
const cancel_task=document.getElementById('cancel-task-btn');
 
const openModalProject=()=> {
    form_project.showModal();
}
add_project.addEventListener("click",openModalProject);
const cancelModalProject=()=>{
    form_project.close();
}
cancel_project.addEventListener("click",cancelModalProject);

const openModalTask=()=> {
    form_task.showModal();
}
add_task.addEventListener("click",openModalTask);
const cancelModalTask=()=>{
    form_task.close();
}
cancel_task.addEventListener("click",cancelModalTask); 


const project_form=document.getElementById('add-project');
const project_name=document.getElementById('project-name-input');
const readFormProject=(e)=>{
    e.preventDefault();
    const rProjectName=project_name.value;
    manager.addProject(rProjectName);
    renderProjects(manager);
    project_form.reset();
    form_project.close();
}

