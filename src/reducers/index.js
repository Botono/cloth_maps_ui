// Set up your root reducer here...
import { combineReducers } from 'redux';
import mapsList from './mapsListReducer';
import framesList from './framesListReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
 mapsList,
 framesList,
 auth
});

export default rootReducer;
