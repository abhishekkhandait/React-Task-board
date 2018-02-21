import * as React from "react";

export class CardComponent extends React.Component<any, any> {
    render() {
        return (
            <div className="mdl-card mdl-shadow--2dp">
                <div style= {{ padding: "24px 24px 0 24px" }}>
                    <div className="card-property">Priority: 1</div>
                    <div className="card-property">Due Date: 25/02/1993</div>
                </div>
                <div className="mdl-card__supporting-text" style={{ padding: "0 24px 24px 24px", width: "auto", fontSize:"16px"}}>
                    Lorem ipsum dolor
                </div>
            </div>
        )
    }
}