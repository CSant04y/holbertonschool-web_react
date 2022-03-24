import { initialState, courseReducer } from './courseReducer.js';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS, } from '../actions/courseActionTypes';

describe('Testing State of uiReducer', () => {
  it('verifies initial state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual(initialState);
  });
  it('verifies that fetch course works', () => {
    const newState = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];

    const action = {
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
    };

    const result = courseReducer(undefined, action);

    expect(result).toEqual(newState);

  });

  it('verifies that state is changed', () => {
    const state = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: false,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const action = {
      type: SELECT_COURSE,
      index: 2
    };

    const result = courseReducer(state, action);

    expect(result[1].isSelected).toEqual(true)

  });
  it('verifies that state is changed when unselected', () => {
    const state = [
      {
        id: 1,
        name: "ES6",
        isSelected: false,
        credit: 60
      },
      {
        id: 2,
        name: "Webpack",
        isSelected: true,
        credit: 20
      },
      {
        id: 3,
        name: "React",
        isSelected: false,
        credit: 40
      }
    ];
    const action = {
      type: UNSELECT_COURSE,
      index: 2
    };

    const result = courseReducer(state, action);
    expect(result[1].isSelected).toEqual(false)
  });
});
