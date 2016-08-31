// Set up your root reducer here...
import { combineReducers } from 'redux';
import {maps, mapOptions} from './mapsListReducer';
import framesList from './framesListReducer';
import auth from './authReducer';
import nav from './navReducer';

const rootReducer = combineReducers({
 maps,
 mapOptions,
 framesList,
 auth,
 nav
});

export default rootReducer;
