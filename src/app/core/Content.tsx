import * as React from "react";
import { BoardComponent } from "../components/Board";

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
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div className="mdl-tabs__tab-bar" style= {{ justifyContent: "flex-start" }}>
                {
                    this.state.boards.map((board, index) => {
                        return (
                            <a href="#starks-panel" key={board.id} className="mdl-tabs__tab">{board.title}</a>
                        )
                    })
                }
                </div>
                <div className="heading">Things to Get Done</div>
                <div className="mdl-tabs__panel is-active" id="starks-panel">
                    <BoardComponent />
                </div>
            </div>
        );
    }
}