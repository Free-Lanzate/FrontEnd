
import { Modal, Button } from "react-bootstrap";
import React, {useState, useEffect} from 'react';
import useAuth from '../hooks/useAuth';
import Logo from "../assets/images/Logo.png";
import {starRating} from "../api/reviews";
import {perfilFreelancer} from "../api/buscar";

 const ModalFreelancer = (props) => {

  const freelancer = props.freelancer;
  const rating = props.rating;

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const{user, isLoading} = useAuth();

  const handleClose = () => {
      setShow(false);
      setShow2(false);
  }
  const handleShow = () => {
      if(!user && !isLoading){
          setShow2(true);
      } else {
          setShow(true);
      }
  }
  const handleLogin = () => window.location.href = "./login";

     const freelancerRating = (num) => {
         return <p className="stars">{starRating(num)}</p>
     }

     const buscaOneliner = (info) => {
         if (info === null){
             return (<p>-</p>)
         } else {
             return (<p>{info}</p>)
         }
     }

     const buscaInfo = (info) => {
         if (info === null){
             return (<p>No hay información disponible.</p>)
         } else {
             return (<p>{info}</p>)
         }
     }

     const [free, setFree] = useState([]);

     useEffect(() => {
         perfilFreelancer(freelancer.id).then(response => {
             setFree(response);
         })
     }, []);
  
    return(
      <>
      <Button className="btn btn-primary fw-bold float-end" onClick={handleShow}>
        Saber más »
      </Button>

      <Modal className="login" backdrop="static" keyboard={false} centered size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title className="text-white fw-bold">
              <i className="bi bi-person-badge-fill me-4"></i>
              {freelancer.firstName + " " + freelancer.lastName }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="b-white text-center d-flex">
            <div className="mt-3 col">
                <div className="justify-content-center align-items-center">
                    <svg
                        className="bd-placeholder-img rounded-circle" width="300" height="300" role="img">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#eee"></rect>
                        <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                    </svg>
                    <div className="justify-content-center d-flex mt-4">
                        <div className="big-badge">
                            @{freelancer.username}
                        </div>
                        <p className="ms-2">
                            {freelancerRating(rating)}
                        </p>
                    </div>
                </div>
                {buscaOneliner(freelancer.oneliner)}
                <h5 className="welcome1 mt-4 fw-bold">Descripción</h5>
                {buscaInfo(freelancer.freelancerDescription)}
                <h5 className="welcome1 mt-4 fw-bold">Redes Sociales</h5>
                {buscaInfo(freelancer.freelancerDescription)} //TODO: REDES SOCIALES Y EL RESTO.
            </div>
            <div className="mt-3 col">
            </div>


        </Modal.Body>
        <Modal.Footer className="b-white">
          <button className="btn3 rounded fw-bold" onClick={handleClose}>
            Cerrar
          </button>
          <button className="btn btn-primary fw-bold float-end" onClick={handleClose}>
            Contactar
          </button>
        </Modal.Footer>
      </Modal>

          <Modal id="modal" className="login" show={show2} backdrop="static" keyboard={false} centered onHide={handleClose}>
              <Modal.Header closeButton closeVariant="white">
                  <Modal.Title className="text-white fw-bold">
                      <i className="bi bi-info-circle"> </i>
                      Acceso Restringido
                  </Modal.Title>
              </Modal.Header>
              <Modal.Body className="b-white text-center">
                  <h5>Para contactar con los freelancers es necesario
                      que inicies sesión en tu cuenta.</h5>
                  <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                  <h5>¿Deseas continuar?</h5>
              </Modal.Body>
              <Modal.Footer className="b-white">
                  <button className="btn3 rounded fw-bold" onClick={handleClose}>
                      No, regrésame
                  </button>
                  <button className="btn btn-primary fw-bold float-end" onClick={handleLogin}>
                      ¡Sí, vamos!
                  </button>
              </Modal.Footer>
          </Modal>
    </>
      )
  }

  export default ModalFreelancer



