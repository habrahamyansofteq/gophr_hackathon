import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '~/redux/types';

export const isUserLoggedIn = createSelector(
  (state: RootState) => state.user,
  (user) => user.loggedIn,
);
