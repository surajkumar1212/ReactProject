// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './../reducer/index'; // Replace with your rootReducer path

const store = configureStore({
  reducer: rootReducer,
});

export default store;