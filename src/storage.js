import {Todo,Project,ProjectManager} from './Logic.js'
 export const saveData=(ProjectMameger)=>{
    const ProjectsString=JSON.stringify(ProjectMameger);
    localStorage.setItem('todoAppProjects',ProjectsString);
}
 export const loadData=()=>{
    const Projects=localStorage.getItem('todoAppProjects');
    if(Projects!=null){
        let projectParce=JSON.parse(Projects);
        const manager = new ProjectManager();
        manager.projects=[];
     projectParce.projects.forEach(function(oldProject){
        const newProject=new Project(oldProject.name);
        oldProject.tasks.forEach(function(oldTodo){
            const newTodo=new Todo(oldTodo.title,oldTodo.description,oldTodo.dueDate,oldTodo.priority,oldTodo.completed);
            newProject.addTask(newTodo);
        })
        manager.projects.push(newProject)

     })
     return manager;


    }
    else {
        const Manager=new ProjectManager();
        return Manager;
    }
}