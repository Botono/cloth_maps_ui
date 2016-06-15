import React from "react";

import AppBar from 'material-ui/AppBar';


import LoginForm from './LoginForm';



class Navigation extends React.Component {
  render() {

    return (
      <div>
        <AppBar
        title="Cloth Maps"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={{position: 'fixed'}}
        />

        <LoginForm authProps={this.props.authProps} loginUserAction={this.props.loginUserAction} />

      </div>
    );
  }
}

export default Navigation;
