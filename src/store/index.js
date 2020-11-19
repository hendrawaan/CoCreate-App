import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import profile from './profile';
import user from './user';
import post from './post'
const reducer = combineReducers({
    user,
    profile,
    post
})

const store = configureStore({
    reducer,
})

export default store;