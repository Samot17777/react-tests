import * as actions from './example.actions';

describe('Example actions', () => {

    // using snapshoot

    it('creates example action', () => {
        expect(actions.exampleAction(5)).toMatchSnapshot();
    });

    it('creates example action with thunk', () => {
        const dispatch = jest.fn().mockImplementation(x => x);
        const getState = jest.fn().mockImplementation(() => ({
            example: {
                exampleNumber: 5
            }
        }));

        expect(actions.exampleActionUsingThunk(5)(dispatch, getState)).toMatchSnapshot();

        expect(dispatch).toHaveBeenCalled();
        expect(getState).toHaveBeenCalled();
    });

    // using strict comparison

    it('creates example action', () => {
        expect(actions.exampleAction(5)).toEqual({
            payload: 5,
            type: "example/EXAMPLE_ACTION"
        });
    });

    it('creates example action with thunk', () => {
        const dispatch = jest.fn().mockImplementation(x => x);
        const getState = jest.fn().mockImplementation(() => ({
            example: {
                exampleNumber: 5
            }
        }));

        expect(actions.exampleActionUsingThunk(5)(dispatch, getState)).toEqual({
            payload: 10,
            type: "example/EXAMPLE_ACTION"
        });

        expect(dispatch).toHaveBeenCalled();
        expect(getState).toHaveBeenCalled();
    });
});