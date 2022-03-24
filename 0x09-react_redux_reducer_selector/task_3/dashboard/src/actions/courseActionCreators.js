import { UNSELECT_COURSE, SELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

const selectCourse = (index) => ({ type: SELECT_COURSE, index });

const unSelectCourse = (index) => ({ type: UNSELECT_COURSE, index });

const fetchCourseSuccess = () => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: [
      {
        id: 1,
        name: "ES6",
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20
      },
      {
        id: 3,
        name: "React",
        credit: 40
      }
    ]
  }
}
module.exports = {
  selectCourse,
  unSelectCourse,
  fetchCourseSuccess,
};
