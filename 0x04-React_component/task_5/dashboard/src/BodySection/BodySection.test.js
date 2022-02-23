import { shallow } from 'enzyme';
import BodySection from './BodySection.js'
import React from 'react';
import "../../config/setupTests"

describe("Testing <BodySection /> componet", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
          );
    })
    it("Tests that Componet renders", () => {
        expect(wrapper.exists()).toEqual(true);
    })

    it("Tests the componet contains <h2 /> element", () =>  {     
        const h2 = wrapper.find('h2');
        const p = wrapper.find('p');

        expect(h2).toHaveLength(1);
        expect(h2.text()).toEqual('test title');
    })
})