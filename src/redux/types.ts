import store from './store';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type Store = typeof store;

export enum Reducer {
  USER = 'user',
  APP_STATE = 'app',
}
