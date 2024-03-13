// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducers/todoRedicer';

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
