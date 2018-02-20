import * as React from "react";
import { CardComponent } from "./Card";

export class BoardComponent extends React.Component {
    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--3-col">
                    <CardComponent />
                </div>
                <div className="mdl-cell mdl-cell--3-col">
                    <CardComponent />
                </div>
                <div className="mdl-cell mdl-cell--3-col">
                    <CardComponent />
                </div>
                <div className="mdl-cell mdl-cell--3-col">
                    <CardComponent />
                </div>
            </div>
        )
    }
}