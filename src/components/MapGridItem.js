import React from "react";

import {IMG_PATH_MAPS} from '../constants/constants';

import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Image from 'react-bootstrap/lib/Image';
import Panel from 'react-bootstrap/lib/Panel';
import Row from 'react-bootstrap/lib/Row';

const MapGridItem = (props) => {

  const panel_title = (
    <h4>
      {props.name}
    </h4>);

  const map_image = IMG_PATH_MAPS.concat(props.image ? props.image : 'default.svg');

  return(
    <Col sm={6} md={4} lg={4} xs={12}>
      <Panel header={panel_title}>
        <Row>
          <Col>
            <Image src={map_image} responsive />
          </Col>
        </Row>
        <Row>
        <Col xs={4} xsOffset={5} sm={6} smOffset={4} md={5} mdOffset={4}>
          <ButtonGroup>
            <Button bsSize="large"><Glyphicon glyph="log-in" /></Button>
            <Button bsSize="large"><Glyphicon glyph="pencil" /></Button>
          </ButtonGroup>
        </Col>
        </Row>
      </Panel>



    </Col>
  );
};

export default MapGridItem;
