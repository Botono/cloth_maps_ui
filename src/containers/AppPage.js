import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/authActions';
import App from '../components/App';

export const AppPage = (props) => {
  return (
    <App
      isAuthenticated={props.isAuthenticated}
      errorMessage={props.errorMessage}
      isFetching={props.isFetching}
    />
  );
};

AppPage.propTypes = {
  actions: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool
};

function mapStateToProps(state) {

  const { auth } = state;
  const { isAuthenticated, errorMessage, isFetching } = auth;

  return {
    isAuthenticated,
    errorMessage,
    isFetching
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
