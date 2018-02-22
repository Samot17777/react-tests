import React, {Component} from 'react';

export class RouteReduxComponent extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                {this.props.example.exampleNumber}
            </div>
        )
    }
}