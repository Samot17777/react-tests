import {compose} from 'redux';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {exampleAction} from './redux/example/example.actions';

import {AppComponent} from './app.component';

const mapStateToProps = ({example}) => ({
    example
});

const mapDispatchToProps = dispatch => ({
    exampleAction: number => dispatch(exampleAction(number)),
});

export const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(AppComponent);
