import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/mapsListActions';
import Maps from '../components/Maps';

export const MapsListPage = (props) => {
  return (
    <Maps
      openMapOptions={props.actions.openMapOptions}
      closeMapOptions={props.actions.closeMapOptions}
      loadMapList={props.actions.loadMapList}
      mapsFetching={props.mapsFetching}
      mapsErrorMessage={props.mapsErrorMessage}
      maps={props.maps}
      frames={props.frames}
      mapOptionsOpened={props.mapOptionsOpened}
      authProps={props.authProps}
    />
  );
};

MapsListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  mapsFetching: PropTypes.bool.isRequired,
  mapsErrorMessage: PropTypes.string.isRequired,
  maps: PropTypes.array.isRequired,
  frames: PropTypes.array.isRequired,
  mapOptionsOpened: PropTypes.number.isRequired,
  authProps: PropTypes.object.isRequired
};

function mapStateToProps(state) {

  const {mapOptionsOpened} = state.mapOptions

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
)(MapsListPage);
