import React, {Component} from 'react';

export class RouteParamWithRouterComponent extends Component {

    render() {
        return (
            <span>My route param with router is : { this.props.match.params.example} </span>
        )
    }
}