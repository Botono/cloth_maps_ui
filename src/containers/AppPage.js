import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/authActions';
import App from '../components/App';

export const AppPage = (props) => {
  return (
    <App
      authProps={props.authProps}
      loginUserAction={props.actions.loginUser}
      children={props.children}
    />
  );
};

AppPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authProps: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
};

function mapStateToProps(state) {

  const { auth } = state;
  const { isAuthenticated, loginErrorMessage, isFetching } = auth;

  return {
    authProps: {
      isAuthenticated,
      loginErrorMessage,
      isFetching
    }
  };

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPage);
