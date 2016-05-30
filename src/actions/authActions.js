import * as types from '../constants/actionTypes';

function requestLogin(creds) {
  return {
    type: types.LOGIN_REQUEST,
    creds
  };
}

function receiveLogin(json) {
  return {
    type: types.LOGIN_SUCCESS,
    id_token: json.id_token
  };
}

function loginError(message) {
  return {
    type: types.LOGIN_FAILURE,
    message
  };
}

export function loginUser(creds) {

  let config = {
    method: 'POST',
    headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    body: `username=${creds.username}&password=${creds.password}`
  };

  return function (dispatch) {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds));

    return fetch('api/login', config)
    .then(response => {
      if (response.status === 401) {
        dispatch(loginError('Login failed.'));
      } else if (response.status === 200) {
        let the_json = response.json();
        localStorage.setItem('id_token', the_json.id_token);
        // Dispatch the success action
        dispatch(receiveLogin(the_json));
      }
      }
    ).catch(err => {
      // Error condition
      dispatch(loginError('Login failed: '+ err.message));
    });
  };
}
