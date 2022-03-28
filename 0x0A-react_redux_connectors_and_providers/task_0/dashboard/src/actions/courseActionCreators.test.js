import { selectCourse, unSelectCourse } from './courseActionCreators.js';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes.js';


// testing Action creators that increment or decrement
describe("Testing courseActionCreators", () => {
    it("Testing for response object", () => {
        const expectObj = { type: SELECT_COURSE, index: 1 };
        const result = selectCourse(1);

        expect(expectObj).toMatchObject(expectObj);
    })

    it("Testing for response object", () => {
        const expectObj = { type: UNSELECT_COURSE, index: 1 };
        const result = unSelectCourse(1);

        expect(expectObj).toMatchObject(expectObj);
    })
});