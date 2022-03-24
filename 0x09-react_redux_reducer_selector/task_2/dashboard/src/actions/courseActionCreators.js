import { UNSELECT_COURSE, SELECT_COURSE } from './courseActionTypes';

const selectCourse = (index) => ({ type: SELECT_COURSE, index });

const unSelectCourse = (index) => ({ type: UNSELECT_COURSE, index });

module.exports = {
  selectCourse,
  unSelectCourse,
};
