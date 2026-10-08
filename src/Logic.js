export class Todo {
    constructor(title, description, dueDate, priority, completed = false) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
    toggleComplete() {
        this.completed = !this.completed;
    }
    updateTodo(newTitle, newdescription, newdueDate, newpriority) {
        this.title = newTitle;
        this.description = newdescription;
        this.dueDate = newdueDate;
        this.priority = newpriority;
    }
}
export class Project {
    constructor(name) {
        this.name = name;
        this.tasks = []
    }
    addTask(taskObject) {
        this.tasks.push(taskObject);
        return taskObject;
    }
    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}

export class ProjectManager {
    constructor() {
        this.projects = [];
        const defaultProject = new Project("Default");
        this.projects.push(defaultProject);
        this.currentProject = defaultProject;
    }
    addProject(projectName) {
        const newProject = new Project(projectName);
        this.projects.push(newProject);
        return newProject;
    }
    deleteProject(index) {
        if (index === 0) return;
        this.projects.splice(index, 1);
        this.currentProject = this.projects[0];
    }
    getProjects() {
        return this.projects;
    }
    setCurrentProject(index) {
        if (this.projects[index])
            this.currentProject = this.projects[index];
    }
    getCurrentProject() {
        return this.currentProject;
    }

}