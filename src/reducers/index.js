// Set up your root reducer here...
import { combineReducers } from 'redux';
import mapsList from './mapsListReducer';
import framesList from './framesListReducer';

const rootReducer = combineReducers({
 mapsList,
 framesList
});

export default rootReducer;
