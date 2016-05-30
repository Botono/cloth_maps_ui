import * as types from '../constants/actionTypes';

function requestLogin(creds) {
  return {
    type: types.LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  };
}

function receiveLogin(user) {
  return {
    type: types.LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
  };
}

function loginError(message) {
  return {
    type: types.LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  };
}

export function loginUser(creds) {
  console.log('Running loginUser()...');
  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  };

  return function (dispatch) {
    // We dispatch requestLogin to kickoff the call to the API
    console.log('dispatch(requestLogin(creds));');
    dispatch(requestLogin(creds));

    return fetch('https://botono.com/cloth_maps/api/login', config)
    .then(response => {
      let the_json = response.json();
      if (!response.ok) {
        // If there was a problem, we want to
        // dispatch the error condition
        dispatch(loginError(the_json.message));
        return Promise.reject(response);
      } else {
        // If login was successful, set the token in local storage
        localStorage.setItem('id_token', the_json.id_token);
        // Dispatch the success action
        dispatch(receiveLogin(the_json));
      }
    })

  }
}
