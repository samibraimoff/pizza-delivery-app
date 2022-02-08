import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css';

const ModalComponent = ({ pizza, show, setShow }) => {
  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={pizza.image} alt='' className='modal-img' />
        <p>{pizza.description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='primary' onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalComponent;
