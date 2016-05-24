import React from "react";
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';
import ModalWindow from './ModalWindow';
import MapForm from './MapForm';
import {EMPTY_MAP_FORM} from '../constants/constants';

class Maps extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.props.openAddMap();
  }

  close() {
    this.props.closeAddMap();
  }

  render() {
    const {mapsList} = this.props;
    let mapProps = EMPTY_MAP_FORM;

    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" onClick={this.open}>{'Add Map'}</Button>
        </ButtonToolbar>

        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>MAP</Col>
            <Col sm={6} md={3}>MAP</Col>
            <Clearfix visibleSmBlock />
            <Col sm={6} md={3}>MAP</Col>
            <Col sm={6} md={3}>MAP</Col>
          </Row>
        </Grid>

        <ModalWindow
          showModalWindow={mapsList.showAddMap}
          close={this.close}
          submit_label="Add Map"
          title="Add Map">
          <MapForm {...mapProps} />
        </ModalWindow>
      </div>
    );

  }
}

export default Maps;
