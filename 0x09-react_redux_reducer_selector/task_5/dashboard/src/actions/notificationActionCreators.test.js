import {
    markAsAread,
    setNotificationFilter,
  } from './notificationActionCreators.js';
  
  import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
  } from './notificationActionTypes';
  
  // testing Action creators for Notification
  describe('Testing courseActionCreators', () => {
    it('Testing for response object for markAsAread', () => {
      const expectObj = {
        type: MARK_AS_READ,
        index: 1,
      };
  
      const result = markAsAread(1);
  
      expect(expectObj).toMatchObject(expectObj);
    });
  
    it('Testing for response for setNotificationFilter', () => {
      const expectObj = {
        type: SET_TYPE_FILTER,
        filter: 'DEFAULT',
      };

      const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
  
      expect(expectObj).toMatchObject(expectObj);
    });
  });
  