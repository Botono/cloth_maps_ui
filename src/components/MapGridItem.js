import React from "react";
import Clearfix from 'react-bootstrap/lib/Clearfix';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

const MapGridItem = (props) => {
  let panel_title = (
    <h3>{props.name}</h3>
  );

  return(
    <Col sm={6} md={4}>
      <Panel header={panel_title}>
        Width: {props.width}
        <br />
        Height: {props.height}
        <br />
        Notes: {props.notes}
      </Panel>
    </Col>
  );
};

export default MapGridItem;
