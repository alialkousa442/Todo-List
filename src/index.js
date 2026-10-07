import { renderProjects, 
    renderTodos, 
    setupProjectEvents, 
    setupTodoEvents, 
    modal, 
    setupFormEvents } from "./dom";
import { Todo,Project,ProjectManager } from "./Logic";
const manager=new ProjectManager();
renderProjects(manager);
renderTodos(manager.getCurrentProject());
setupProjectEvents(manager);
setupTodoEvents(manager);

modal();
setupFormEvents(manager);
