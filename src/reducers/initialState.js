export default {
  // Auth State
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  isFetching: false,
  loginErrorMessage: "",
  user: {},

  // Map List
  showAddMap: false,
  maps: [],
  selectedMap: '',
  mapsFetching: false,
  mapsErrorMessage: '',
  mapOptionsOpened: 0,

  // Frame List
  showAddFrame: false,
  frames: [],
  selectedFrame: '',

  // Navigation - unused currently
  selectedPage: 1
};
