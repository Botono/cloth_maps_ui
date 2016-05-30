// Set up your root reducer here...
import { combineReducers } from 'redux';
import {maps, mapOptions} from './mapsListReducer';
import framesList from './framesListReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
 maps,
 mapOptions,
 framesList,
 auth
});

export default rootReducer;
