import * as types from '../constants/actionTypes';

export function openAddMap(settings) {
  return {type: types.START_ADD_MAP, settings};
}

export function closeAddMap(settings) {
  return {type: types.END_ADD_MAP, settings};
}
