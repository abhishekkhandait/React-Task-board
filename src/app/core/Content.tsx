
import * as React from "react";
import { Tab } from "material-ui";

import { TasksService } from "../services/taskService";
import { BoardModel } from "../models/boardModel";

export interface State {
    boards: any[]
}

export class ContentComponent extends React.Component<object, State> {

    private taskService = new TasksService();
    public boards: BoardModel[];

    constructor(props: any) {
        super(props);
        this.state = {
            boards: []
        };
        this.getBoards();

    }

    public getBoards() {
        this.taskService.getBoards()
            .then((res) => {
                this.setState({
                    boards: res.data.map((d: any) => {
                        return new BoardModel(d.id, d.title, d.author);
                    }),
                });
            })
            .catch((err) => {
                console.log(`error in getting boards | message: ${err}`);
            });
    }

    render() {
        return (
            <div>
                {
                    this.state.boards.map((board) => {
                        return (
                            <Tab key={board.id} label={board.title} value={board.id}>
                                <div>
                                    Welcome to {board.title}
                                </div>
                            </Tab>
                        )
                    })
                }
            </div>
        );
    }
}