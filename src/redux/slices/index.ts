import {combineReducers} from '@reduxjs/toolkit';

import app from './app/slice';
import user from './user/slice';

export const slices = combineReducers({
  user,
  app,
});

export default slices;
