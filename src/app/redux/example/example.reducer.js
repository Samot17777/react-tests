import * as types from './example.action-types';

const defaultState = {
    exampleNumber: 0
};

export const exampleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case(types.EXAMPLE_ACTION): {
            return {
                ...state,
                exampleNumber: action.payload
            }
        }
        default:
            return state;
    }
};