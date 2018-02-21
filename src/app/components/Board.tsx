import * as React from "react";
import { CardComponent } from "./Card";

export class BoardComponent extends React.Component {

    public tiles = [
        { text: 'New', color: '#03A9F4' },
        { text: 'On-Hold', color: '#f5c942' },
        { text: 'In-Progress', color: '#d066e2' },
        { text: 'Done', color: '#ff6b68' },
    ];

    render() {
        return (
            <div className="mdl-grid" style={{ position: "relative"}}>
                {
                    this.tiles.map((tile) => {
                        return (
                            <div className="mdl-cell mdl-cell--3-col">
                                <div className="board-header">
                                    <div className="board-header__row" style={{ backgroundColor: `${tile.color}` }}>
                                        <span style={{ padding: "8px 0 0 4px" }}>{tile.text}</span>
                                        <div className="mdl-layout-spacer"></div>
                                        <button className="mdl-button mdl-button--icon">
                                            <i className="material-icons">sort</i>
                                        </button>
                                        <button className="mdl-button mdl-button--icon">
                                            <i className="material-icons">add</i>
                                        </button>
                                    </div>
                                </div>
                                <CardComponent />
                                <CardComponent />
                                <CardComponent />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}