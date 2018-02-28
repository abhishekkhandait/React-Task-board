import { combineReducers } from "redux";
import { addBoard } from "./addBoard";
import { addTask } from "./addTask";
import { deleteTask } from "./deleteTask";
import { updateTask } from "./updateTask";

export const App = combineReducers({ 
    addBoard, 
    addTask, 
    deleteTask, 
    updateTask,
});