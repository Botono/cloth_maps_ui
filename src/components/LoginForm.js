import React from "react";

import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import {loginUser} from '../actions/authActions';


class LoginForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.loginSubmit = this.loginSubmit.bind(this);
  }

  loginSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value
    const creds = { username: username.trim(), password: password.trim() };
    loginUser(creds);
  }

  render() {
    return(
      <form onSubmit={this.loginSubmit}>
        <FormGroup controlId="username">
          <ControlLabel>Username</ControlLabel>
          <FormControl type="text" id="username" />
        </FormGroup>
        <FormGroup controlId="password">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" id="password" />
        </FormGroup>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" onClick={this.loginSubmit}>{'Logging in...' ? this.props.isFetching : 'Login'}</Button>
        </ButtonToolbar>
      </form>
    );
  }
}

export default LoginForm;
