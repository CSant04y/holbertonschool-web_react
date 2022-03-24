import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS, } from '../actions/courseActionTypes';
import { Map, setIn } from 'immutable';
import { coursesNormalizer } from '../schema/courses.js'

export const initialState = [];

export const courseReducer = (state = new Map(initialState), action) => {
    let newState = [];
    switch (action.type) {
        case "FETCH_COURSE_SUCCESS": {
            newState = [];
            action.data.map((course) => {
                newState.push({ ...course, isSelected: false });
            })

            const newData = coursesNormalizer(newState);
            
            return state.merge(newData);
        }
        case "SELECT_COURSE": {
          return setIn(state, ['entities', 'courses', action.index, 'isSelected'], true);
        }
        case "UNSELECT_COURSE": {
          return setIn(state, ['entities', 'courses', action.index, 'isSelected'], false)
        }
        default:
            return state
      }
}
