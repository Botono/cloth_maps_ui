import React from "react";

import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';

import AlertError from './AlertError';
import MapGridItem from './MapGridItem';


class FrameMap extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.getMapFrame = this.getMapFrame.bind(this);
    this.getMap = this.getMap.bind(this);
    this.getFramesThatFit = this.getFramesThatFit.bind(this);

  }

  getMapFrame(id) {
    let frame_id = id || 0;
    for (let i=0;this.props.frames[i];i++) {
      if (this.props.frames[i].id === frame_id) {
        return this.props.frames[i];
      }
    }
    return {}
  }

  getMap(map_id) {
    for (let i=0;this.props.maps[i];i++) {
      if (this.props.maps[i].id === map_id*1) {
        return this.props.maps[i];
      }
    }
    return {}
  }

  getFramesThatFit(the_map) {
    let the_frames = [];
    let frame_area = 0;
    let map_area = the_map.height * the_map.width;

    for (let i=0;this.props.frames[i];i++) {

      let this_frame = this.props.frames[i];
      frame_area = this_frame.window_height * this_frame.window_width;

      if (map_area < frame_area) {
        the_frames.push(this_frame);
      }
    }

    return the_frames;
  }

  render() {
    let the_map = this.getMap(this.props.params.mapId);

    // Get frames that fit the map, sorted by how well the map fits
    let the_frames = this.getFramesThatFit(the_map).sort((a, b) => {
      let map_area = the_map.height * the_map.width;
      let a_diff = (a.window_height * a.window_width)-map_area;
      let b_diff = (b.window_height * b.window_width)-map_area;
      return a_diff-b_diff;
    });

    let mapGridItems =
      the_frames.map((frame, i) => {
        let return_array = [];

        return_array.push(
          <MapGridItem
            mapOptions={the_map}
            frameOptions={frame}
            forceFrame={true}
            openMapOptions={this.props.openMapOptions}
            closeMapOptions={this.props.closeMapOptions}
            mapOptionsOpened={this.props.mapOptionsOpened}
          />);

        /*if ((i+1)%4===0) {
          // Insert Large Clearfix after every 4th MapGridItem
          return_array.push(<Clearfix visibleLgBlock /> );
        } else */if ((i+1)%3===0) {
          // Insert Medium Clearfix after every third MapGridItem
          return_array.push(<Clearfix visibleMdBlock /> );
        } else if ((i+1)%2===0) {
          // Insert Sm Clearfix after every other MapGridItem
          return_array.push(<Clearfix visibleSmBlock /> );
        }


        return (return_array);
    });
    console.log(mapGridItems);
    return (
      <div>
        <Grid fluid={true}>
          <Row className="show-grid">
            <AlertError message={this.props.mapsErrorMessage} />
            {mapGridItems}
          </Row>
        </Grid>
      </div>
    );

  }
}

export default FrameMap;
