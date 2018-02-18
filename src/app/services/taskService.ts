import axios from "axios";

/* import { BoardModel } from "../models/boardModel";
import { TaskModel } from "../models/taskModel"; */


export class TasksService {
    // private instance variable to hold base url
    /* private baseUrl = 'http://localhost:3001/'; */
    private boardUrl = 'http://localhost:3001/boards/';
    private taskUrl = 'http://localhost:3001/tasks/';

    public getBoards() {
        return axios.get(this.boardUrl);
    }

    public getTasks(boardid: string) {
        let tasks;
        const url = this.boardUrl + boardid + '/tasks';
        axios.get(url)
            .then((response) => tasks = response)
            .catch((error) => console.log('Server Error'));

        return tasks;
    }

    public updateTask(id: string, targetlist: string) {
        const url = this.taskUrl + id;
        let task;
        axios.patch(url, { 'list': targetlist })
            .then((response) => task = response)
            .catch((error) => console.log('Server Error'));
        return task;
    }

    public createTask(boardid: string, list: string, name: string, dueDate: string, priority: string) {
        const url = this.boardUrl + boardid + '/tasks';
        const taskobj = {
            'list': list,
            'name': name,
            'dueDate': dueDate,
            'priority': priority
        }
        let tasks;

        axios.post(url, JSON.stringify(taskobj))
            .then((response) => tasks = response)
            .catch((error) => console.log('Server Error'));
        
        return tasks;
    }
}