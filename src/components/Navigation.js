import React from "react";

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


import LoginForm from './LoginForm';



class Navigation extends React.Component {

  render() {

    let sideNavToggle = () => {
      this.props.toggleSideNav(this.props.sideNavOpened);
    };

    return (
      <div>
        <AppBar
        title="Cloth Map Collection"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={{position: 'fixed'}}
        onLeftIconButtonTouchTap={sideNavToggle}
        />

        <LoginForm authProps={this.props.authProps} loginUserAction={this.props.loginUserAction} />
        <Drawer
          docked={false}
          width={200}
          open={this.props.sideNavOpened}
          onRequestChange={sideNavToggle}
        >
          <MenuItem>Menu Item</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Navigation;
