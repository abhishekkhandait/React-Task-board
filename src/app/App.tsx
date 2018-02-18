import * as React from "react";
import { NavComponent } from "./core/Nav";
import { ContentComponent } from "./core/Content";

export class AppComponent extends React.Component {
    render() {
        const styles = {
            display: "block"
        };

        return (
            <div style={styles}>
                <NavComponent />
                <ContentComponent />
            </div>
        );
    }
}