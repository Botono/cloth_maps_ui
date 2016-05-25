import {START_ADD_MAP, END_ADD_MAP, LOAD_MAP_LIST} from '../constants/actionTypes';
import {TEMP_MAP_DATA} from '../constants/constants';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function mapsListReducer(state = initialState.mapsList, action) {

  switch (action.type) {
    case START_ADD_MAP:
      return objectAssign({}, state, {showAddMap: true});
    case END_ADD_MAP:
      return objectAssign({}, state, {showAddMap: false});
    case LOAD_MAP_LIST:
      return objectAssign({}, state, {maps: TEMP_MAP_DATA});
    default:
      return state;
  }
}
