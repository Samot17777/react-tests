import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';

import { exampleReducer as example } from './redux/example/example.reducer';

export const rootReducer = combineReducers({
    example,
    form,
    router,
});
