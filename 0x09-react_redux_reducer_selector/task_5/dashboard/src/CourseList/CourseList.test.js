import { shallow } from 'enzyme';
import React from 'react';
import "../../config/setupTests";
import { expect } from 'chai';
import CourseList from './CourseList.js';
import { StyleSheetTestUtils } from 'aphrodite';

describe("Testing the <CourseListRow /> componet renders", () => {
    let listCourses;

    beforeEach(() => {
        listCourses = [
          { id: 1, name: "ES6", credit: 60 },
          { id: 2, name: "Webpack", credit: 20 },
          { id: 3, name: "React", credit: 40 },
        ];
        StyleSheetTestUtils.suppressStyleInjection();
    });

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Tests to see if <CourseList /> Renders", () => {
        const wrapper = shallow(<CourseList listCourses={listCourses}/>);
        expect(wrapper.render()).to.not.be.an("undefined");
    });


    it("Tests to see if It renders 5 rows", () => {
        const wrapper = shallow(<CourseList listCourses={listCourses}/>);

        expect(wrapper.find("CourseListRow")).to.have.lengthOf(5);
    });
})
