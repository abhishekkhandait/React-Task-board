import { ActionType } from "../actions/Actions";
import { DELETE_TASK } from "../actions/Contants";
import { StoreState } from "../types/storeState";
import { Task } from "../types/task";

export function deleteTask(state: StoreState, action: ActionType): StoreState {
    if(action.type === DELETE_TASK) {
        return {
            ...state,
            tasks: state.tasks.filter((task: Task) => {
                return (task.id !== action.task.id);
            })
        }  
    }
    else {
        return state;
    } 
}