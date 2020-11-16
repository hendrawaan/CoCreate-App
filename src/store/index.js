import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import profile from './profile';
import user from './user';

const reducer = combineReducers({
  user,
  profile
})

const store = configureStore({
  reducer,
})

export default store;