import { shallow } from 'enzyme';
import React from 'react';
import "../../config/setupTests";
import { expect } from 'chai';
import CourseList from './CourseList.js';
// import CourseListRow from './CourseListRow.js';

describe("Testing the <CourseListRow /> componet renders", () => {

    it("Tests to see if <CourseList /> Renders", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.render()).to.not.be.an("undefined");
    });


    it("Tests to see if It renders 5 rows", () => {
        const wrapper = shallow(<CourseList />);

        expect(wrapper.find("CourseListRow")).to.have.lengthOf(5);
    });
})
