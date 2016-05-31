import * as types from '../constants/actionTypes';
import {loginError} from '../actions/authActions';

export function openAddMap(settings) {
  return {type: types.START_ADD_MAP, settings};
}

export function closeAddMap(settings) {
  return {type: types.END_ADD_MAP, settings};
}

export function openMapOptions(mapId) {
  return {type: types.MAP_OPTIONS_OPEN, mapId};
}

export function closeMapOptions() {
  return {type: types.MAP_OPTIONS_CLOSED};
}

function requestMapList() {
  return {type: types.MAP_LIST_REQUEST};
}

function receiveMapList(json) {
  return {type: types.MAP_LIST_RECEIVE, mapList: json.maps};
}

function mapListError(message) {
  return {type: types.MAP_LIST_ERROR, message: message};
}

export function loadMapList() {
  console.log('loadMapList');
  return function (dispatch) {

    let token = localStorage.getItem('id_token') || null;
    let config = {};

    if(token) {
      config = {
        headers: { 'Authorization': `Bearer ${token}` }
      };
    }
    else {
      dispatch(loginError('Auth failure while requesting maps.'));
      return;
    }

    dispatch(requestMapList());

    return fetch('api/maps', config)
    .then(response =>
        response.json().then(the_json => ({ the_json, response }))
            ).then(({ the_json, response }) =>  {
        if (!response.ok) {
          if (response.status === 401) {
            dispatch(loginError('Auth failure while requesting maps.'));
          } else if (response.status === 500) {
            dispatch(mapListError(the_json.message));
          }
          return Promise.reject(the_json);
        } else {
          dispatch(receiveMapList(the_json));
        }
      }).catch(
        err => {
          // Error condition
          console.log(err);
          dispatch(mapListError('Map List Error: '+err.message));
        }
      );

  };
}
