import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import admin from './admin';
import feed from './feed';
import post from './post';
import profile from './profile';
import user from './user';
const reducer = combineReducers({
  admin,
  user,
  profile,
  feed,
  post
})

const store = configureStore({
    reducer,
})

export default store;