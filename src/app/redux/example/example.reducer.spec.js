import * as types from './example.action-types';
import {exampleReducer} from "./example.reducer";

describe('Example reducer', () => {

    // using snapshoot

    it('sets number', () => {
        expect(exampleReducer(undefined, {
            type: types.EXAMPLE_ACTION,
            payload: 5
        })).toMatchSnapshot();
    });

    // using strict comparison

    it('sets number', () => {
        expect(exampleReducer(undefined, {
            type: types.EXAMPLE_ACTION,
            payload: 5
        })).toEqual({
            exampleNumber: 5
        });
    });

});