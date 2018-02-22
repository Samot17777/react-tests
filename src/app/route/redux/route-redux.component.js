import React, {Component} from 'react';

export class RouteReduxComponent extends Component {
    componentDidMount() {
        this.props.function();
    }

    componentWillReceiveProps() {
        this.props.function();
    }

    render() {
        // console.log(this.props);
        return (
            <div>
                {this.props.example.exampleNumber}
            </div>
        )
    }
}