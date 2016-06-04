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


class Maps extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.getMapFrame = this.getMapFrame.bind(this);
    this.props.loadMapList();
  }

  open() {
    this.props.openAddMap();
  }

  close() {
    this.props.closeAddMap();
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

  render() {
    let mapGridItems =
      this.props.maps.map((map, i) => {
        let return_array = [];
        let mapFrame = this.getMapFrame(map.frame_id);

        return_array.push(
          <MapGridItem
            mapOptions={map}
            frameOptions={mapFrame}
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

export default Maps;
