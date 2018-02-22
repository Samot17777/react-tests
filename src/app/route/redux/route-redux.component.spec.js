import React from 'react';
import configureStore from 'redux-mock-store'
import {render, shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import {RouteReduxComponent} from "./route-redux.component";
import {RouteReduxContainer} from "./route-redux.container";

describe('Route redux component', () => {
    it('renders correctly', () => {
        const props = {
            example: {
                exampleNumber: 1
            }
        };

        const wrapper = render(<RouteReduxComponent {...props}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('changes props correctly', () => {
        const props = {
            example: {
                exampleNumber: 1
            }
        };

        const wrapper = shallow(<RouteReduxComponent {...props}/>);

        expect(wrapper.text()).toBe("1");
        wrapper.setProps({
            example: {
                exampleNumber: 2
            }
        });

        expect(wrapper.text()).toBe("2");
    });
});

const mockStore = configureStore();
describe('Route redux container', () => {
    it('renders correctly', () => {
        const store = mockStore({
            example: {
                exampleNumber: 1
            }
        });

        const wrapper = render(
            <Provider store={store}>
                <RouteReduxContainer/>
            </Provider>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('changes props correctly', () => {
        const store = mockStore({
            example: {
                exampleNumber: 1
            }
        });

        // const wrapper = shallow(
        //     <Provider store={store}>
        //         <RouteReduxContainer/>
        //     </Provider>
        // );

        const wrapper = mount(
            <Provider store={store}>
                <RouteReduxContainer/>
            </Provider>
        );

        expect(wrapper.text()).toBe("1");
    });
});