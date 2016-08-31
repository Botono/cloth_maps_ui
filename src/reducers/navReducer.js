import {OPEN_SIDE_NAV, CLOSE_SIDE_NAV} from '../constants/actionTypes';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

const initialState = {
  sideNavOpened: false
};

// The nav reducer.
export default function nav(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDE_NAV:
      return Object.assign({}, state, {
        sideNavOpened: true
      });
    case CLOSE_SIDE_NAV:
      return Object.assign({}, state, {
        sideNavOpened: false
      });
    default:
      return state;
  }
}
