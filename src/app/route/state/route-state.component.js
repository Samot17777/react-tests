import React, {Component} from 'react';

export class RouteStateComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            exampleNumber: 0
        };
    };

    changeState = () => {
        this.setState((prevState) => ({
            exampleNumber: ++prevState.exampleNumber
        }));
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <span>{this.state.exampleNumber}</span>
                <button onClick={this.changeState}>change</button>
            </div>
        )
    }
}