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
      mapsFetching={props.mapsFetching}
      mapsErrorMessage={props.mapsErrorMessage}
      maps={props.maps}
      frames={props.frames}
      children={props.children}
    />
  );
};

AppPage.propTypes = {
  actions: PropTypes.object.isRequired,
  authProps: PropTypes.object.isRequired,
  mapsFetching: PropTypes.bool.isRequired,
  mapsErrorMessage: PropTypes.string.isRequired,
  maps: PropTypes.array.isRequired,
  frames: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired
};

function mapStateToProps(state) {

  const { auth } = state;
  const mapState = state.maps;
  const { isAuthenticated, loginErrorMessage, isFetching } = auth;
  console.log(mapState);
  const { mapsFetching, mapsErrorMessage, maps, frames } = mapState;

  return {
    authProps: {
      isAuthenticated,
      loginErrorMessage,
      isFetching
    },
    mapsFetching,
    mapsErrorMessage,
    maps,
    frames
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
