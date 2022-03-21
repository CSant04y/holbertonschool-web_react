import { initialState, uiReducer } from './uiReducer';
import { SELECT_COURSE } from '../actions/courseActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';

describe('Testing State of uiReducer', () => {
  it('verifies initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('verifies intital stat when action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: SELECT_COURSE })).toEqual(initialState);
  });

  it('verifies property when action DISPLAY_NOTIFICATION_DRAWER', () => {
      expect((uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })).isNotificationDrawerVisible).toEqual(true);
  })
});
