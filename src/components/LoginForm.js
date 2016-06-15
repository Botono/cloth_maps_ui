import React from "react";


import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


import AlertError from './AlertError';

class LoginForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.loginSubmit = this.loginSubmit.bind(this);
  }

  loginSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const creds = { username: username.trim(), password: password.trim() };
    this.props.loginUserAction(creds);
  }

  render() {
    console.log(this.props.authProps.loginErrorMessage);

    let buttonLabel = this.props.authProps.isFetching ? 'Logging in...' : 'Login';

    const actions = [
      <FlatButton
        label={buttonLabel}
        primary={true}
        onTouchTap={this.loginSubmit}
      />
    ];

    return(
      <Dialog
        title="Login"
        actions={actions}
        modal={true}
        open={!this.props.authProps.isAuthenticated}
      >
        <form onSubmit={this.loginSubmit}>

          <TextField
            hintText="Username"
            floatingLabelText="Username"
            id="username"
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            type="password"
            id="password"
          />
        </form>
      </Dialog>

    );
  }
}

export default LoginForm;
