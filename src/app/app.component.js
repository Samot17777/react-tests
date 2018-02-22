import React, {Component, Fragment} from 'react';

import { RouteComponent } from "./route/route.component";

export class AppComponent extends Component {

    render() {
        return (
            <Fragment>
                <div>
                    <span>HelloWorld</span>
                </div>
                <RouteComponent />
            </Fragment>
        )
    }
}