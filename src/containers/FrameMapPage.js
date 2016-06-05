import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/mapsListActions';
import FrameMap from '../components/FrameMap';

export const FrameMapPage = (props) => {
  return (
    <FrameMap
      params={props.params}
      maps={props.maps}
      frames={props.frames}
      mapOptionsOpened={props.mapOptionsOpened}
      authProps={props.authProps}
    />
  );
};

FrameMapPage.propTypes = {
  actions: PropTypes.object.isRequired,
  maps: PropTypes.array.isRequired,
  frames: PropTypes.array.isRequired,
  mapOptionsOpened: PropTypes.number.isRequired,
  authProps: PropTypes.object.isRequired,
  params: PropTypes.object
};

function mapStateToProps(state) {

  const {mapOptionsOpened} = state.mapOptions;

  return {
    mapOptionsOpened
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
)(FrameMapPage);
