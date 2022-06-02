
import { Modal, Button } from "react-bootstrap";
import {React, useState, useEffect} from 'react'

export const ModalAnuncio = (props) => {

  const [showModal, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const anuncio = props.anuncio

    return(
      <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{anuncio.postTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
        {anuncio.postPrice}
        </p>
        <p>
        {anuncio.postDescription}
        </p>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    )
}
