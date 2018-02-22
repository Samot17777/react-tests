import React, {Component} from 'react';
import {Field} from 'redux-form';

export class RouteFormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <label>First Name</label>
                    <div>
                        <Field
                            name="firstName"
                            component="input"
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field
                            name="lastName"
                            component="input"
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                    <button type="button" disabled={this.props.pristine || this.props.submitting}
                            onClick={this.props.reset}>
                        Clear Values
                    </button>
                </div>
            </form>
        )
    }
}