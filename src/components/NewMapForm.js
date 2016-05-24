import React from "react";
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

const NewMapForm = () => {
  return (
    <form>
      <FormGroup controlId="mapName">
        <ControlLabel>Name</ControlLabel>
        <FormControl type="text" placeholder="Name..." />
      </FormGroup>
      <FormGroup controlId="mapWidth">
        <ControlLabel>Width</ControlLabel>
        <FormControl type="number" placeholder="Width..." />
      </FormGroup>
      <FormGroup controlId="mapHeight">
        <ControlLabel>Height</ControlLabel>
        <FormControl type="number" placeholder="Height..." />
      </FormGroup>
      <FormGroup controlId="mapNotes">
        <ControlLabel>Notes</ControlLabel>
        <FormControl componentClass="textarea" placeholder="Notes..." />
      </FormGroup>
    </form>
  );
};


export default NewMapForm;
