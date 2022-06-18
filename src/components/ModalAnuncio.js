
import { Modal, Button } from "react-bootstrap";
import {React, useState} from 'react'

 const ModalAnuncio = ({anuncio}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return(
      <>
      <Button variant="primary" onClick={handleShow}>
        saber mas...
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{anuncio.postTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {anuncio.postDescription}
          <p>
            Precio: 
            {anuncio.postPrice}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Añadir al carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      )
  }

  export default ModalAnuncio


