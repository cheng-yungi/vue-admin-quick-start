import axios from '../../../config/AxiosConfig';
import { Commit } from 'vuex';
import {
  FETCH_NOTIFICATIONS,
  SET_NOTIFICATIONS,
  SET_NOTIFICATION_IS_FETCHING,
  FETCH_NOTIFICATION_ONE,
  SET_NOTIFICATION,
} from '@/store/types';
export const actions = {
  [FETCH_NOTIFICATIONS](context: { commit: Commit, state: NotificationState } ) {
    context.commit(SET_NOTIFICATION_IS_FETCHING, true);
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/notification`)
        .then((res: any) => {
          if (res.data.status !== '0') {
            reject('error');
          } else {
            const notifications: INotification[] = res.data.data;
            context.commit(SET_NOTIFICATIONS, notifications);
            resolve('success');
          }
        })
        .catch((error: any) => {
          reject('request error');
        });
      context.commit(SET_NOTIFICATION_IS_FETCHING, false);
    });
  },
  [FETCH_NOTIFICATION_ONE](context: { commit: Commit, state: State }, payload: any ) {
    context.commit(SET_NOTIFICATION_IS_FETCHING, true);
    return new Promise((resolve, reject) => {
      axios.get(`/api/v1/notification/` + payload)
        .then((res: any) => {
          if (res.data.status !== '0') {
            reject('error');
          } else {
            const notification: INotification = res.data.data[0];
            context.commit(SET_NOTIFICATION, notification);
            resolve('success');
          }
        })
        .catch((error: any) => {
          reject('request error');
        });
      context.commit(SET_NOTIFICATION_IS_FETCHING, false);
    });
  },
};
