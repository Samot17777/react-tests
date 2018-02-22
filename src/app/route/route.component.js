import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {RouteParamComponent} from "./param/route-param.component";
import {RouteFormContainer} from "./form/route-form.container";

export class RouteComponent extends Component {

    render() {
        return (
            <Switch>
                <Route path="/form" component={RouteFormContainer}/>
                <Route path="/:example" component={RouteParamComponent}/>
            </Switch>
        )
    }
}