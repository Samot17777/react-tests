import {connect} from 'react-redux';
import {RouteReduxComponent} from './route-redux.component';

const mapStateToProps = ({example}) => ({
    example
});

const mapDispatchToProps = () => ({});

export const RouteReduxContainer =
    connect(mapStateToProps, mapDispatchToProps)(RouteReduxComponent);