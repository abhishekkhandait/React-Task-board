import * as React from "react";

export class CardComponent extends React.Component<any, any> {
    render() {
        return(
            <div className="mdl-card mdl-shadow--2dp">
                <div className="mdl-card__title">
                    <h4 className="mdl-card__title-text">Update</h4>
                </div>
                <div className="mdl-card__supporting-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </div>
            </div>   
        )
    }
}