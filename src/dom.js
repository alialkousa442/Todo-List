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