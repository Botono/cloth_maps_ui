import React from "react";

import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import ModalWindow from './ModalWindow';
import LoginForm from './LoginForm';
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap';


class Navigation extends React.Component {
  render() {
    return (
      <div>
      <Navbar staticTop={true} fluid={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Cloth Maps</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <IndexLinkContainer to='/'>
              <NavItem eventKey={1}>Maps</NavItem>
            </IndexLinkContainer>
            <LinkContainer to='/Frames'>
              <NavItem eventKey={2}>Frames</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>

      </Navbar>

      <ModalWindow
        showModalWindow={!this.props.isAuthenticated}
        submit_label="Login"
        title="Login">
        <LoginForm isFetching={this.props.isFetching} />
      </ModalWindow>

      </div>
    );
  }
}

export default Navigation;
