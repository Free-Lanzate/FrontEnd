
import { Modal, Button } from "react-bootstrap";
import {React, useState} from 'react'
import { agregarItem } from "../api/canasta";
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../api/auth";

 const ModalAnuncio = ({anuncio}) => {

  const UserId = jwtDecode(getAccessToken()).sub.id;
  const [show, setShow] = useState(false);

  const [data, setData] = useState({
    userId: null, 
    postId: null
  });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    cambiarData()
    setShow(true);
  }

  const añadirAlCarrito = async e =>{
    e.preventDefault();
    const result = await agregarItem(data);
    console.log(result)
    setShow(false);
  }

  function cambiarData(){
    setData({
      userId: UserId, 
      postId: anuncio.id
    })
  }
  
    return(
      <>
      <Button className="btn btn-primary fw-bold float-end" onClick={handleShow}>
          Saber más »
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
          <Button variant="primary" onClick={añadirAlCarrito}>
            Añadir al carrito
          </Button>
        </Modal.Footer>
      </Modal>
    </>
      )
  }

  export default ModalAnuncio



