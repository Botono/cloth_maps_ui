import React, { PropTypes } from "react";

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
    </Modal>
  );
};

ModalWindow.propTypes = {
  children: PropTypes.element.isRequired,
  showModalWindow: PropTypes.bool.isRequired,
  close: PropTypes.func,
  submit_label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ModalWindow;
