import * as constants from "./Contants";
import { Board } from "../types/board";
import { Task } from "../types/task";

export interface AddNewTask {
    type: constants.ADD_NEW_TASK;
    task: Task;
}

export interface DeleteTask {
    type: constants.DELETE_TASK;
    task: Task;

}

export interface UpdateTask {
    type: constants.UPDATE_TASK;
    task:Task;
    list: string;
}

export interface AddNewBoard {
    type: constants.ADD_NEW_BOARD;
    board: Board;
}

export type ActionType = AddNewTask | DeleteTask | UpdateTask | AddNewBoard;

export const addNewTask = (task: Task): AddNewTask => {
    return {
        type: constants.ADD_NEW_TASK,
        task
    }
}

export const deleteTask = (task: Task): DeleteTask => {
    return {
        type: constants.DELETE_TASK,
        task
    }
}

export const updateTask = (task: Task, list: string): UpdateTask => {
    return {
        type: constants.UPDATE_TASK,
        task,
        list
    }
}

export const addNewBoard = (board: Board): AddNewBoard => {
    return {
        type: constants.ADD_NEW_BOARD,
        board
    }
}