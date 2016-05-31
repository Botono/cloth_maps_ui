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

const MapGridItem = (props) => {

  const mapId = props.id;
  const openMapOptions = props.openMapOptions;
  const closeMapOptions = props.closeMapOptions;

  const openClickHandler = () => {
    openMapOptions(mapId);
  };

  const closeOptionsModal = () => {
    props.closeMapOptions();
  };

  const frameAction = () => {
    console.log('FRAME ACTION RAN BISH!');
    props.closeMapOptions();
  }

  const optionItems = [
    {optionText: 'Frame this map', optionAction: frameAction }
  ];

  const buttonsFoo = (<ButtonGroup>
    <Button onClick={openClickHandler} bsStyle="link" bsSize="large">
      <Glyphicon glyph="option-vertical" />
    </Button>
  </ButtonGroup>);

  const map_image = IMG_PATH_MAPS.concat(props.image ? props.image : 'default.svg');

  return(
    <Col sm={6} md={4} lg={4} xs={12}>
        <Grid fluid={true}>
        <Row>
          <Col xs={12}>
            <h3>
              {props.name}
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
              <Image src={map_image} responsive bsClass="grid-item" />
            </div>
          </Col>
        </Row>
        </Grid>
      <ModalWindow
        showModalWindow={props.mapOptionsOpened === props.id}
        close={closeOptionsModal}
        customClass="modal-gridItem-options"
      >
        <GridItemOptions optionItems={optionItems} />
      </ModalWindow>
    </Col>
  );
};

export default MapGridItem;
