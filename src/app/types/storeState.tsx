import { Task } from "./task";
import { Board } from "./board";

export interface StoreState {
    currentBoard: number;
    boards: Board[];
    tasks: Task[];
}