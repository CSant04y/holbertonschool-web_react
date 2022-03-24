import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS, } from '../actions/courseActionTypes';
import Immutable from 'immutable';

export const initialState = [];

export const courseReducer = (state = initialState, action) => {
    let newState = [];
    switch (action.type) {
        case "FETCH_COURSE_SUCCESS": {
            newState = [];
            action.data.map((course) => {
                newState.push({ ...course, isSelected: false });
            })
          return newState;
        }
        case "SELECT_COURSE": {
            newState = [];
            state.map((course) => {
                if (course.id === action.index) {
                    newState.push({ ...course, isSelected: true });
                } else {
                    newState.push(course);
                }
            })
          return newState;
        }
        case "UNSELECT_COURSE": {
            newState = [];
            state.map((course) => {
                if (course.id === action.index) {
                    newState.push({ ...course, isSelected: false });
                } else {
                    newState.push(course);
                }
            })
          return newState;
        }

        default:
            return state
      }
}