import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/mapsListActions';
import Maps from '../components/Maps';

export const MapsListPage = (props) => {
  return (
    <Maps
      openAddMap={props.actions.openAddMap}
      closeAddMap={props.actions.closeAddMap}
      loadMapList={props.actions.loadMapList}
      mapsListState={props.mapsListState}
    />
  );
};

MapsListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  mapsListState: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    mapsListState: state.mapsList
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
