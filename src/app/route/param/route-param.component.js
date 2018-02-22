import React, {Component, Fragment} from 'react';
import {RouteParamWithRouterContainer} from "./with-router/route-param-with-router.container";

export class RouteParamComponent extends Component {

    render() {
        return (
            <Fragment>
                <span>My route param is : {this.props.match.params.example} </span>
                <RouteParamWithRouterContainer/>
            </Fragment>
        );
    }
}