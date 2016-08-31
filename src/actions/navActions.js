import * as types from '../constants/actionTypes';

export function openSideNav() {
  return {
    type: types.OPEN_SIDE_NAV
  };
}

export function closeSideNav() {
  return {
    type: types.CLOSE_SIDE_NAV
  };
}

export function toggleSideNav(open) {
  if (!open) {
    return openSideNav();
  } else {
    return closeSideNav();
  }
}
