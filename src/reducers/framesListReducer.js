import {START_ADD_FRAME, END_ADD_FRAME} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function mapsListReducer(state = initialState, action) {

  switch (action.type) {
    case START_ADD_FRAME:
      return objectAssign({}, state, {showAddFrame: true});
    case END_ADD_FRAME:
      return objectAssign({}, state, {showAddFrame: false});
    default:
      return state;
  }
}
