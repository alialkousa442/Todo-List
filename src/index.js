import { Todo } from "./Logic";
import { saveData } from "./storage";
import { loadData } from "./storage";

const app=loadData();
console.log(app.getProjects());

