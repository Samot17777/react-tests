import {reduxForm} from 'redux-form';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {RouteFormComponent} from './route-form.component';

const mapDispatchToProps = () => ({
    onSubmit: body => console.log(body)
});

export const RouteFormContainer = compose(
    connect(null, mapDispatchToProps),
    reduxForm({
        form: 'simple'
    })
)(RouteFormComponent);