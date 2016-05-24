import React, { PropTypes } from "react";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const MapForm = (props) => {
  return (
    <form>
      <FormGroup controlId="mapName">
        <ControlLabel>Name</ControlLabel>
        <FormControl type="text" placeholder="Name..." value={props.mapName} />
      </FormGroup>
      <FormGroup controlId="mapWidth">
        <ControlLabel>Width</ControlLabel>
        <FormControl type="number" placeholder="Width..." value={props.mapWidth} />
      </FormGroup>
      <FormGroup controlId="mapHeight">
        <ControlLabel>Height</ControlLabel>
        <FormControl type="number" placeholder="Height..." value={props.mapHeight} />
      </FormGroup>
      <FormGroup controlId="mapNotes">
        <ControlLabel>Notes</ControlLabel>
        <FormControl componentClass="textarea" placeholder="Notes..." value={props.mapNotes} />
      </FormGroup>
    </form>
  );
};

MapForm.propTypes = {
  children: PropTypes.element,
  mapName: PropTypes.string,
  mapWidth: PropTypes.number,
  mapHeight: PropTypes.number,
  mapNotes: PropTypes.string
};


export default MapForm;
