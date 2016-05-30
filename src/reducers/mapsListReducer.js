import {MAP_LIST_REQUEST, MAP_LIST_RECEIVE, MAP_LIST_ERROR, MAP_OPTIONS_OPEN, MAP_OPTIONS_CLOSED} from '../constants/actionTypes';

import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export function maps(state = initialState, action) {

  switch (action.type) {
    case MAP_LIST_REQUEST:
      return Object.assign({}, state, {
        mapsFetching: true,
        mapsErrorMessage: '',
        maps: []
      });
    case MAP_LIST_ERROR:
      return Object.assign({}, state, {
        mapsFetching: false,
        mapsErrorMessage: action.message,
        maps: []
      });
    case MAP_LIST_RECEIVE:
      return Object.assign({}, state, {
        mapsFetching: false,
        mapsErrorMessage: '',
        maps: action.mapList
      });
    default:
      return state;
  }
}

export function mapOptions(state = initialState, action) {
  switch (action.type) {
    case MAP_OPTIONS_OPEN:
      return Object.assign({}, state, {
        mapOptionsOpened: action.mapId
      });
    case MAP_OPTIONS_CLOSED:
      return Object.assign({}, state, {
        mapOptionsOpened: 0
      });
    default:
      return state;
  }
}
