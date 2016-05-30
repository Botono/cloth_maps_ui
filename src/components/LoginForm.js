import React from "react";

import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

import AlertError from './AlertError';

class LoginForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.loginSubmit = this.loginSubmit.bind(this);
  }

  loginSubmit(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const creds = { username: username.trim(), password: password.trim() };
    this.props.loginUserAction(creds);
  }

  render() {
    console.log(this.props.authProps.loginErrorMessage);
    let buttonLabel = this.props.authProps.isFetching ? 'Logging in...' : 'Login';
    return(
      <form onSubmit={this.loginSubmit}>
        <AlertError message={this.props.authProps.loginErrorMessage} />
        <FormGroup controlId="username">
          <ControlLabel>Username</ControlLabel>
          <FormControl type="text" id="username" />
        </FormGroup>
        <FormGroup controlId="password">
          <ControlLabel>Password</ControlLabel>
          <FormControl type="password" id="password" />
        </FormGroup>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" type="submit">{buttonLabel}</Button>
        </ButtonToolbar>
      </form>
    );
  }
}

export default LoginForm;
