import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import profile from './profile';
import user from './user';
import feed from './feed'
const reducer = combineReducers({
    user,
    profile,
    feed
})

const store = configureStore({
    reducer,
})

export default store;