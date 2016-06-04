export default {
  // Auth State
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  isFetching: false,
  loginErrorMessage: "",
  user: {},

  // Map List
  showAddMap: false,
  maps: [],
  frames: [],
  selectedMap: '',
  mapsFetching: false,
  mapsErrorMessage: '',
  mapOptionsOpened: 0,

  // Frame List
  showAddFrame: false,
  selectedFrame: '',

  // Navigation - unused currently
  selectedPage: 1
};
