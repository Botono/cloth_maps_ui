import React from "react";

import {IMG_PATH_MAPS} from '../constants/constants';

import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Image from 'react-bootstrap/lib/Image';
import Panel from 'react-bootstrap/lib/Panel';

const MapGridItem = (props) => {

  const panel_title = (
    <h4>
      {props.name}
    </h4>);

  const map_image = IMG_PATH_MAPS.concat(props.image ? props.image : 'default.svg');

  return(
    <Col sm={6} md={4} lg={4}>
      <Panel header={panel_title}>
        <Col lg={10} md={10} sm={10} xs={10}>
          <Image src={map_image} height={400} width={400} />
        </Col>
        <Col lg={2} md={2} sm={2} xs={2}>
          <ButtonGroup vertical>
            <Button bsSize="large"><Glyphicon glyph="log-in" /></Button>
            <Button bsSize="large"><Glyphicon glyph="pencil" /></Button>
          </ButtonGroup>
        </Col>
      </Panel>



    </Col>
  );
};

export default MapGridItem;
