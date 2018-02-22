import * as types from './example.action-types';

export const exampleAction = number => ({
    type: types.EXAMPLE_ACTION,
    payload: number
});

export const exampleActionUsingThunk = number => (dispatch, getState) => dispatch({
    type: types.EXAMPLE_ACTION,
    payload: getState().example.exampleNumber += number
});