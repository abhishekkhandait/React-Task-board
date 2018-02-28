import { ActionType } from "../actions/Actions";
import { UPDATE_TASK } from "../actions/Contants";
import { Task } from "../types/task";
import { StoreState } from "../types/storeState";

export function updateTask(state: StoreState, action: ActionType): StoreState {
    if(action.type === UPDATE_TASK) {
        return {
            ...state,
            tasks: state.tasks.map((task: Task) => {
                if(task.id === action.task.id) {
                    task.list = action.list;
                }
                return task;
            })
        }  
    }
    else {
        return state;
    } 
}