// store.js
import venueReducer from './venueSlice';
import avReducer from './avSlice';
import mealsReducer from "./mealsSlice";

import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer
  },
});
