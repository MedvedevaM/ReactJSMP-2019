import { combineReducers } from 'redux';
import { films } from './films';

export const appReducer = combineReducers({
    films,
})