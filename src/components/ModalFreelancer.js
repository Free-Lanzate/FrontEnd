
import { Modal, Button } from "react-bootstrap";
import {React, useState} from 'react'

 const ModalFreelancer = ({freelancer}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    return(
      <>
      <Button className="btn btn-primary fw-bold float-end" onClick={handleShow}>
        Saber más »
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{freelancer.firstName + " " + freelancer.lastName }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {freelancer.username}
          <p>
            {'Rating: ' + freelancer.freelancerRating}
          </p>
          <p>
          {freelancer.freelancerDescription}
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

  export default ModalFreelancer



