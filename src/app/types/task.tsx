export interface Task {
    id: number;
    name: string;
    list: string;
    dueDate: Date;
    priority: number;
    boardId: number;
}