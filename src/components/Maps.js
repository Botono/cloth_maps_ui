import React from "react";
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Clearfix from 'react-bootstrap/lib/Clearfix';

class Maps extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col sm={6} md={3}>MAP</Col>
          <Col sm={6} md={3}>MAP</Col>
          <Clearfix visibleSmBlock><code>&lt;{'Clearfix visibleSmBlock'} /&gt;</code></Clearfix>
          <Col sm={6} md={3}>MAP</Col>
          <Col sm={6} md={3}>MAP</Col>
        </Row>
      </Grid>
    );

  }
}

export default Maps;
