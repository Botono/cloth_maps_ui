import React from "react";

import {IMG_PATH_MAPS} from '../constants/constants';

import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Image from 'react-bootstrap/lib/Image';
import ModalWindow from './ModalWindow';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';

import GridItemOptions from './GridItemOptions';
import MapImage from './MapImage';

const MapGridItem = (props) => {

  const mapId = props.mapOptions.id;
  const openMapOptions = props.openMapOptions;
  const closeMapOptions = props.closeMapOptions;

  const openClickHandler = () => {
    openMapOptions(mapId);
  };

  const closeOptionsModal = () => {
    closeMapOptions();
  };

  const frameAction = () => {
    props.closeMapOptions();
    props.frameAMap(mapId);
  }

  const optionItems = [
    {optionText: 'Frame this map', optionAction: frameAction }
  ];

  const buttonsFoo = (<ButtonGroup>
    <Button onClick={openClickHandler} bsStyle="link" bsSize="large">
      <Glyphicon glyph="option-vertical" />
    </Button>
  </ButtonGroup>);



  return(
    <Col sm={6} md={4} lg={4} xs={12}>
        <Grid fluid={true}>
        <Row>
          <Col xs={12}>
            <h3>
              {props.forceFrame ? props.frameOptions.name : props.mapOptions.name}
              <ButtonGroup pullRight>
                <Button onClick={openClickHandler} bsStyle="link" bsSize="large">
                  <Glyphicon glyph="option-vertical" />
                </Button>
              </ButtonGroup>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="grid-item-spacer">
              <MapImage mapOptions={props.mapOptions} frameOptions={props.frameOptions} forceFrame={props.forceFrame} />
            </div>
          </Col>
        </Row>
        </Grid>
      <ModalWindow
        showModalWindow={props.mapOptionsOpened === mapId}
        close={closeOptionsModal}
        customClass="modal-gridItem-options"
      >
        <GridItemOptions optionItems={optionItems} />
      </ModalWindow>
    </Col>
  );
};

export default MapGridItem;
