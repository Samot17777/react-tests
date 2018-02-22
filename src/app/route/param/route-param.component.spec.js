import React from 'react';
import {render} from 'enzyme'
import {MemoryRouter, Route} from 'react-router-dom';
import {RouteParamComponent} from "./route-param.component";

describe('Route param component', () => {
    it('renders correctly', () => {
        const props = {
            match: {
                params: {
                    example: 'aa'
                }
            }
        };

        expect(
            render(
                <MemoryRouter initialEntries={['/foo']}>
                    <Route
                        path="/:example"
                        component={() => (
                            <RouteParamComponent  {...props}/>
                        )}
                    />
                </MemoryRouter>
            ),
        ).toMatchSnapshot();
    })
});