import { initialState, courseReducer } from './courseReducer.js';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS, } from '../actions/courseActionTypes';
import Immutable, {fromJS, toJS, Map, setIn } from 'immutable';
import {
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse,
} from '../actions/courseActionCreators';
import { coursesNormalizer, } from '../schema/courses';

describe('Testing State of uiReducer', () => {
  let newState = Map(initialState);

  it('verifies initial state when no action is passed', () => {
    expect(courseReducer(undefined, {}).toJS()).toEqual({});
  });

  it('verifies that fetch course works', () => {
    const action = fetchCourseSuccess();
    const result = courseReducer(undefined, action);
    const newData = [];

    action.data.map((course) => {
      newData.push({...course, isSelected: false});
    })
    const normalizedData = coursesNormalizer(newData)
    expect(result.toJS()).toEqual(normalizedData);

  });

  it('verifies that state is changed for SELECT COURSE', () => {
    const action = selectCourse(1);
    const ns = setIn(newState, ['entities', 'courses', action.index, 'isSelected'], false);
    const result = courseReducer(newState, action);

    expect(Immutable.is(ns, result)).toEqual(false);
  });
  it('verifies that state is changed when unselected', () => {
    const action = unSelectCourse(1);
    const ns = setIn(newState, ['entities', 'courses', action.index, 'isSelected'], true);
    const result = courseReducer(newState, action);
    expect(Immutable.is(ns, result)).toEqual(false);
  });
});
