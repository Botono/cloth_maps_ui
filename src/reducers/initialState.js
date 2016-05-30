export default {
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
  isFetching: false,
  errorMessage: '',
  user: {},
  showAddMap: false,
  maps: [],
  selectedMap: '',
  showAddFrame: false,
  frames: [],
  selectedFrame: '',
  selectedPage: 1
};
