import { ActionType } from "../actions/Actions";
import { ADD_NEW_BOARD } from "../actions/Contants";
import { StoreState } from "../types/storeState";

export function addBoard(state: StoreState, action: ActionType): StoreState {
    if(action.type === ADD_NEW_BOARD) {
        return {
            ...state,
            boards: [...state.boards, action.board]
        }
    }
    else {
        return state;
    } 
}