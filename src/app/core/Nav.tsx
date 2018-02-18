import * as React from "react";

export class NavComponent extends React.Component {

    render() {
        const headerStyle = {
            backgroundColor: "#32c787",
            padding: "0px 40px 0 15px"
        };

        return (
            <header className="mdl-layout__header mdl-layout__header--transparent">
                <div className="mdl-layout__header-row" style={headerStyle}>
                    <span className="mdl-layout-title">Kanban Board</span>
                </div>
            </header>
        );
    }
}