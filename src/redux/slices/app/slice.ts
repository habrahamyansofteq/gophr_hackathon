import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Reducer} from '../../types';
import {TAppState} from './types';

const initialAppState: TAppState = {
  isDarkMode: true,
} as const;

const appSlice = createSlice({
  name: Reducer.APP_STATE,
  initialState: initialAppState,
  reducers: {
    setDarkMode(state, action: PayloadAction<boolean>) {
      state.isDarkMode = action.payload;
    },
  },
});

export const {setDarkMode} = appSlice.actions;
export default appSlice.reducer;
