import { ActionType } from "../actions/Actions";
import { ADD_NEW_TASK } from "../actions/Contants";
import { StoreState } from "../types/storeState";

export function addTask(state: StoreState, action: ActionType): StoreState {
    if(action.type === ADD_NEW_TASK) {
        return {
            ...state,
            tasks: [...state.tasks, action.task]
        }  
    }
    else {
        return state;
    } 
}