import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom.js';
import React from 'react';
import "../../config/setupTests"
import { StyleSheetTestUtils } from 'aphrodite';

describe("Testing <BodySection /> componet", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <BodySectionWithMarginBottom title='test title'>
                <p>test children node</p>
            </BodySectionWithMarginBottom>
        );
        StyleSheetTestUtils.suppressStyleInjection();
    })

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it("Tests that Componet renders", () => {
        expect(wrapper.exists()).toEqual(true);
    })

    it("Tests the componet contains <h2 /> element", () =>  {     

        const BodySection = wrapper.find('BodySection');

        expect(BodySection).toHaveLength(1);
        expect(BodySection.props().title).toEqual('test title');

        const internal = BodySection.dive();

        const h2 = internal.find('h2');
        const p = internal.find('p');

        expect(h2).toHaveLength(1);
        expect(h2.text()).toEqual('test title');
    })
})
