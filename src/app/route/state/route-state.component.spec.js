import React from 'react';
import {render, shallow, mount} from 'enzyme';
import {RouteStateComponent} from "./route-state.component";

describe('Route state component', () => {
    it('renders correctly', () => {
        const wrapper = render(<RouteStateComponent />);

        expect(wrapper).toMatchSnapshot();
    });

    it('changes state correctly', () => {

        const wrapper = shallow(<RouteStateComponent />);

        expect(wrapper.find('span').text()).toBe("0");
        wrapper.setState({
                exampleNumber: 2
        });

        expect(wrapper.find('span').text()).toBe("2");

        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');

        expect(wrapper.find('span').text()).toBe("4");
    });
});
