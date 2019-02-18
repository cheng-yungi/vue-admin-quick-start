import {
  SET_NOTIFICATIONS, SET_NOTIFICATION_IS_FETCHING, SET_NOTIFICATION,
} from '@/store/types';

export const mutations = {
  [SET_NOTIFICATIONS]: (state: NotificationState, notifications: INotification[]) => {
    state.notifications = notifications;
  },
  [SET_NOTIFICATION_IS_FETCHING]: (state: NotificationState, isFetching: boolean) => {
    state.isFetching = isFetching;
  },
  [SET_NOTIFICATION]: (state: NotificationState, notification: INotification) => {
    state.notification = notification;
  },
};
