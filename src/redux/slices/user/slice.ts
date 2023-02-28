import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {Reducer} from '../../types';
import {UserState} from './types';

const initialUserState: UserState = {
  loggedIn: false,
} as const;

const userSlice = createSlice({
  name: Reducer.USER,
  initialState: initialUserState,
  reducers: {
    setUserLoggedIn(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
  },
});

export const {setUserLoggedIn} = userSlice.actions;
export default userSlice.reducer;
