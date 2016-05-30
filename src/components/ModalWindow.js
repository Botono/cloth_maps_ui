import React, { PropTypes } from "react";

import Modal from 'react-bootstrap/lib/Modal';

const ModalWindow = (props) => {
  let modalHeader = null;
  if (props.title) {
    modalHeader = (<Modal.Header closeButton>
      <Modal.Title>{props.title}</Modal.Title>
    </Modal.Header>);
  }
  return (
    <Modal show={props.showModalWindow} onHide={props.close} dialogClassName={props.customClass}>
      {modalHeader}
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
  submit_label: PropTypes.string,
  title: PropTypes.string
};

export default ModalWindow;
