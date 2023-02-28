import {configureStore} from '@reduxjs/toolkit';

import slices from './slices';

const store = configureStore({
  reducer: slices,
  // middleware,
});

export default store;
