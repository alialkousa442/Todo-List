import { Todo, Project, ProjectManager } from './Logic.js'
export const saveData = (ProjectMameger) => {
    const ProjectsString = JSON.stringify(ProjectMameger);
    localStorage.setItem('todoAppProjects', ProjectsString);
}
export const loadData = () => {
    const Projects = localStorage.getItem('todoAppProjects');
    if (Projects != null) {
        let projectParce = JSON.parse(Projects);
        const manager = new ProjectManager();
        manager.projects = [];
        projectParce.projects.forEach(function (oldProject) {
            const newProject = new Project(oldProject.name);
            oldProject.tasks.forEach(function (oldTodo) {
                const newTodo = new Todo(oldTodo.title, oldTodo.description, oldTodo.dueDate, oldTodo.priority);
                newTodo.completed = oldTodo.completed;
                newProject.addTask(newTodo);
            })
            manager.projects.push(newProject)

        })
        if (projectParce.currentProject) {
            // ابحث عن رقم (index) المشروع المخزن ضمن القائمة الجديدة
            const index = manager.projects.findIndex(p => p.name === projectParce.currentProject.name);

            // إذا لقاه، خليه هو المشروع الحالي
            if (index !== -1) {
                manager.setCurrentProject(index);
            }
        }
        return manager;


    }
    else {
        const Manager = new ProjectManager();
        return Manager;
    }
}