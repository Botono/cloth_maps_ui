import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/mapsListActions';
import Frames from '../components/Frames';

export const FramesListPage = (props) => {
  return (
    <Frames
      openAddFrame={props.actions.openAddFrame}
      closeAddFrame={props.actions.closeAddFrame}
      framesList={props.framesList}
    />
  );
};

FramesListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  framesList: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    framesList: state.framesList
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
)(FramesListPage);
