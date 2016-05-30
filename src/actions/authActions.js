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

export function loginError(message) {
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
    .then(response =>
        response.json().then(the_json => ({ the_json, response }))
            ).then(({ the_json, response }) =>  {
        if (!response.ok) {
          // If there was a problem, we want to
          // dispatch the error condition
          dispatch(loginError('Login failed.'));
          return Promise.reject(the_json);
        } else {
          // If login was successful, set the token in local storage
          localStorage.setItem('id_token', the_json.id_token);
          // Dispatch the success action
          dispatch(receiveLogin(the_json));
        }
      }).catch(
        dispatch(loginError('Login failed.'))
      );
  };
}
