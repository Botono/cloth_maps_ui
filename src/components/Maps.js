import React from "react";

import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';

import ModalWindow from './ModalWindow';
import MapForm from './MapForm';
import MapGridItem from './MapGridItem';
import {EMPTY_MAP_FORM} from '../constants/constants';

class Maps extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.props.loadMapList();
  }

  open() {
    this.props.openAddMap();
  }

  close() {
    this.props.closeAddMap();
  }

  render() {
    const {mapsList} = this.props;
    let mapFormProps = EMPTY_MAP_FORM;

    return (
      <div>
        <Row>
          <Col md={3} mdOffset={9}>
            <ButtonGroup pullRight={true}>
              <Button bsStyle="primary" onClick={this.open}>{'Add Map'}</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Grid fluid={true}>
          <Row className="show-grid">
            {mapsList.maps.map((map) => {
              return (
                <MapGridItem {...map} />
              );
            })}
          </Row>
        </Grid>

        <ModalWindow
          showModalWindow={mapsList.showAddMap}
          close={this.close}
          submit_label="Add Map"
          title="Add Map">
          <MapForm {...mapFormProps} />
        </ModalWindow>
      </div>
    );

  }
}

export default Maps;
