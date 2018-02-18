
import * as React from "react";
import { TasksService } from "../services/taskService";
import { BoardModel } from "../models/boardModel";

export class ContentComponent extends React.Component {

    private taskService = new TasksService();
    private boards: BoardModel[] = [];

    constructor(props: any) {
        super(props);
        this.getBoards();
        console.log(this.boards);
        this.state = this.boards[0];
    }

    public getBoards() {
        this.taskService.getBoards()
            .then((res) => {
                res.data.map((d: any) => {
                    this.boards.push(new BoardModel(d.id, d.title, d.author));
                })
            })
            .catch((err)=>  {
                console.log(`error in getting boards | message: ${err}`);
            });
    }

    render() {

        return (
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div className="mdl-tabs__tab-bar" style={{ display: "flex", margin: "0 auto", justifyContent: "flex-start" }}>
                    <a href="#starks-panel" className="mdl-tabs__tab is-active">Starks</a>
                    <a href="#lannisters-panel" className="mdl-tabs__tab">Lannisters</a>
                    <a href="#targaryens-panel" className="mdl-tabs__tab">Targaryens</a>
                </div>

                <div className="mdl-tabs__panel is-active" id="starks-panel">
                    <ul>
                        <li>Eddard</li>
                        <li>Catelyn</li>
                        <li>Robb</li>
                        <li>Sansa</li>
                        <li>Brandon</li>
                        <li>Arya</li>
                        <li>Rickon</li>
                    </ul>
                </div>
                <div className="mdl-tabs__panel" id="lannisters-panel">
                    <ul>
                        <li>Tywin</li>
                        <li>Cersei</li>
                        <li>Jamie</li>
                        <li>Tyrion</li>
                    </ul>
                </div>
                <div className="mdl-tabs__panel" id="targaryens-panel">
                    <ul>
                        <li>Viserys</li>
                        <li>Daenerys</li>
                    </ul>
                </div>
            </div>
        );
    }
}