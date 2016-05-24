import React, { PropTypes } from "react";
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Modal from 'react-bootstrap/lib/Modal';

const ModalWindow = (props) => {
  return (
    <Modal show={props.showModalWindow} onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <ButtonToolbar>
          <Button onClick={props.close}>Close</Button>
          <Button bsStyle="primary" onClick={props.close}>{props.submit_label}</Button>
        </ButtonToolbar>

      </Modal.Footer>
    </Modal>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.element.isRequired,
  showModalWindow: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  submit_label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ModalWindow;
