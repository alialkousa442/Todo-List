import { renderProjects, 
    renderTodos, 
    setupProjectEvents, 
    setupTodoEvents, 
    modal, 
    setupFormEvents } from "./dom";
import { Todo,Project,ProjectManager } from "./Logic";
import { loadData } from "./storage";
const manager=loadData();
renderProjects(manager);
renderTodos(manager.getCurrentProject());
setupProjectEvents(manager);
setupTodoEvents(manager);

modal();
setupFormEvents(manager);
