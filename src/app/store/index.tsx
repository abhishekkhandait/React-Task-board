import { createStore } from "redux";
import { StoreState } from "../types/storeState";
import { App } from "../reducers/index";

export const Store = createStore(App,
    {
        currentBoard: 1,
        boards: [
            {
                id: 1,
                title: "Board-1",
                author: "Abhishek"
            },
            {
                id: 2,
                title: "Board-2",
                author: "Monika"
            }
        ],
        tasks: [
            {
                id: 1,
                name: "Create user stories",
                list: "Done",
                dueDate: "24/04/2017",
                priority: 1,
                boardId: 1
            },
            {
                id: 2,
                name: "Visual Designing",
                list: "In-Progress",
                dueDate: "25/04/2017",
                priority: 2,
                boardId: 1
            },
            {
                id: 3,
                name: "Development",
                list: "In-Progress",
                dueDate: "25/04/2017",
                priority: 3,
                boardId: 1
            },
            {
                id: 4,
                name: "SIT",
                list: "New",
                dueDate: "25/04/2017",
                priority: 4,
                boardId: 1
            },
            {
                list: "New",
                name: "System Intergration Testing",
                dueDate: "26/04/2017",
                priority: 5,
                boardId: "1",
                id: 5
            },
            {
                list: "New",
                name: "Deployment",
                dueDate: "26/04/2017",
                priority: 6,
                boardId: "1",
                id: 6
            },
            {
                list: "New",
                name: "UAT",
                dueDate: "26/04/2017",
                priority: 10,
                boardId: "1",
                id: 7
            },
            {
                list: "New",
                name: "UAT",
                dueDate: "26/04/2017",
                priority: 10,
                boardId: "2",
                id: 1
            },
            {
                list: "In-Progress",
                name: "SIT",
                dueDate: "26/04/2017",
                priority: 10,
                boardId: "2",
                id: 2
            }
        ]
    });
