import React, {useState, useEffect} from 'react'
import Logo from "../assets/images/Logo.png";
import{getAccessToken, logout} from "../api/auth"
import jwtDecode from "jwt-decode";
import {miPerfil, editarPerfil, perfilFreelancer} from "../api/user";
import {notification} from "antd";
import {Modal} from "react-bootstrap";
import useAuth from "../hooks/useAuth";

const Perfil = () => {

    const{user, isLoading, isFreelancer} = useAuth();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const UserId = jwtDecode(getAccessToken()).sub.id;

    const [inputs, setInputs] = useState({
        location: "",
        firstName: "",
        lastName: "",
        email: "",
        username: "",
    });
    const [inputs2, setInputs2] = useState({
        oneliner: "",
        freelancerDescription: "",
        facebookUrl: "",
        twitterUrl: "",
        instagramUrl: "",
        linkedinUrl: "",
        websiteUrl: "",
        country: "",
        city: "",
        postalCode: "",
        address: "",
        phoneNumber: ""
    });

    const profile = async () => {
        const myUser = await miPerfil(UserId);
        setInputs({
            ...inputs,
            location: myUser.location,
            firstName: myUser.firstName,
            lastName: myUser.lastName,
            email: myUser.email,
            username: myUser.username
        });
    }

    const profileFreelancer = async () => {
        const myUser2 = await perfilFreelancer(UserId);
        console.log()
        setInputs2({
            ...inputs2,
            oneliner: myUser2.oneliner,
            freelancerDescription: myUser2.freelancerDescription,
            facebookUrl: myUser2.facebookUrl,
            twitterUrl: myUser2.twitterUrl,
            instagramUrl: myUser2.instagramUrl,
            linkedinUrl: myUser2.linkedinUrl,
            websiteUrl: myUser2.websiteUrl,
            country: myUser2.country,
            city: myUser2.city,
            postalCode: myUser2.postalCode,
            address: myUser2.address,
            phoneNumber: myUser2.phoneNumber
        });
    }

    useEffect(() => {
        profile();
        if(isFreelancer){
            profileFreelancer();
        }
    }, []);

    const [formValid, setFormValid] = useState({
        email: false,
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const changeForm2 = e => {
        setInputs2({
            ...inputs2,
            [e.target.name]: e.target.value
        });
    };

    const guardarCambios = async e => {
        e.preventDefault();
        const result = await editarPerfil(UserId, inputs);
            if (result.message === "User was updated successfully.") {
                notification["success"]({
                    message: "User was updated successfully."
                });
                resetForm();
                window.location.href = "/";
        }
    }

    const guardarCambios2 = async e => {
        e.preventDefault();
        const result = await editarPerfil(UserId, inputs);
        if (result.message === "Freelancer was updated successfully.") {
            notification["success"]({
                message: "Freelancer was updated successfully."
            });
            resetForm();
            window.location.href = "/";
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }

        setInputs({
            location: "",
            firstName: "",
            lastName: "",
            email: "",
            username: "",
        });

        setFormValid({
            email: false,
        });
    };

    const resetForm2 = () => {
        const inputs = document.getElementsByTagName("input");

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.remove("success");
            inputs[i].classList.remove("error");
        }

        setInputs2({
            oneliner: "",
            freelancerDescription: "",
            facebookUrl: "",
            twitterUrl: "",
            instagramUrl: "",
            linkedinUrl: "",
            websiteUrl: "",
            country: "",
            city: "",
            postalCode: "",
            address: "",
            phoneNumber: ""
        });
    };

    function changePassword(){
        logout();
        window.location.href = "/clave/" + inputs.email
    }

    function confirmacion(){
        return(
            <Modal id="modal" className="login" show={show} backdrop="static" keyboard={false} centered
                   onHide={handleClose}>
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title className="text-white fw-bold">
                        <i className="bi bi-info-circle"> </i>
                        Esto cerrará tu sesión
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="b-white text-center">
                    <h5>Para realizar el cambio de contraseña de manera segura
                        se cerrará la sesión de tu cuenta.</h5>
                    <img className="logo mb-4 mt-3" src={Logo} alt="Free-Lánzate"/>
                    <h5>¿Deseas continuar?</h5>
                </Modal.Body>
                <Modal.Footer className="b-white">
                    <button className="btn3 rounded fw-bold" onClick={handleClose}>
                        No, regrésame
                    </button>
                    <button className="btn btn-primary fw-bold float-end" onClick={changePassword}>
                        ¡Sí, vamos!
                    </button>
                </Modal.Footer>
            </Modal>
        )
    }

    if(!isFreelancer) {
        return (
            <div className="contenedorPerfil text-center d-flex">
                <form className="d-flex" onChange={changeForm} onSubmit={guardarCambios}>
                    <div className="container rounded row w-100">
                        <h5 className=" welcome mb-3 fw-bold">Ubicación</h5>
                        <div className="row mt-3">
                            <div className="input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-geo-fill my-1"></i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="location"
                                        name="location"
                                        placeholder="location"
                                        value={inputs.location}
                                    />
                                    <label htmlFor="dir">Dirección</label>
                                </div>
                            </div>
                        </div>
                        <h5 className="mt-4 welcome mb-3 fw-bold">Datos del usuario</h5>
                        <div className="row mt-3">
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-circle my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="firstName"
                                        value={inputs.firstName}
                                    />
                                    <label htmlFor="firstName">Nombres</label>
                                </div>
                            </div>
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-badge-fill my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="lastName"
                                        value={inputs.lastName}
                                    />
                                    <label htmlFor="lastName">Apellidos</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-envelope-fill my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        value={inputs.email}
                                    />
                                    <label htmlFor="email">Correo electrónico</label>
                                </div>
                            </div>
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-at my-1"></i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="username"
                                        name="username"
                                        placeholder="username"
                                        value={inputs.username}
                                    />
                                    <label htmlFor="username">Nombre de usuario</label>
                                </div>
                            </div>
                        </div>
                        <p className="mt-5 mb-3">¿Desea cambiar su contraseña? Haga clic<b className="badge"
                                                                                           onClick={handleShow}>aquí</b>
                        </p>
                        <div className="row mt-4">
                            <button className="w-50 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Guardar
                                Cambios
                            </button>
                        </div>
                    </div>
                </form>
                {
                    confirmacion()
                }
            </div>
        )
    } else {
        return (
            <>
            <div className="contenedorPerfil text-center d-flex">
                <form className="d-flex" onChange={changeForm} onSubmit={guardarCambios}>
                    <div className="container rounded row w-100">
                        <h5 className="mt-3 welcome mb-3 fw-bold">Datos del usuario</h5>
                        <div className="row mt-3">
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-circle my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="firstName"
                                        name="firstName"
                                        placeholder="firstName"
                                        value={inputs.firstName}
                                    />
                                    <label htmlFor="firstName">Nombres</label>
                                </div>
                            </div>
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-badge-fill my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="lastName"
                                        name="lastName"
                                        placeholder="lastName"
                                        value={inputs.lastName}
                                    />
                                    <label htmlFor="lastName">Apellidos</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-envelope-fill my-1"> </i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        value={inputs.email}
                                    />
                                    <label htmlFor="email">Correo electrónico</label>
                                </div>
                            </div>
                            <div className="col input-group">
                                <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-at my-1"></i>
                              </span>
                                </div>
                                <div className="form-floating flex-grow-1">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        id="username"
                                        name="username"
                                        placeholder="username"
                                        value={inputs.username}
                                    />
                                    <label htmlFor="username">Nombre de usuario</label>
                                </div>
                            </div>
                        </div>
                        <p className="mt-5 mb-3">¿Desea cambiar su contraseña? Haga clic<b className="badge"
                                                                                           onClick={handleShow}>aquí</b>
                        </p>
                        <div className="row mt-4">
                            <button className="w-50 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Guardar
                                Cambios
                            </button>
                        </div>
                    </div>
                </form>
                {
                    confirmacion()
                }
            </div>
        <div className="contenedorPerfil text-center d-flex">
            <form className="d-flex" onChange={changeForm2} onSubmit={guardarCambios2}>
                <div className="container rounded row w-100">
                    <h5 className="mt-3 welcome mb-3 fw-bold">Datos del freelancer</h5>
                    <div className="row mt-3">
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-circle my-1"> </i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="country"
                                    name="country"
                                    placeholder="country"
                                    value={inputs2.country}
                                />
                                <label htmlFor="country">País</label>
                            </div>
                        </div>
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-person-badge-fill my-1"> </i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="city"
                                    name="city"
                                    placeholder="city"
                                    value={inputs2.city}
                                />
                                <label htmlFor="lastName">Ciudad</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-envelope-fill my-1"> </i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="address"
                                    name="address"
                                    placeholder="address"
                                    value={inputs2.address}
                                />
                                <label htmlFor="address">Dirección</label>
                            </div>
                        </div>
                        <div className="col input-group">
                            <div>
                              <span className="input-group-text bg-gb text-white">
                                  <i className="bi bi-at my-1"></i>
                              </span>
                            </div>
                            <div className="form-floating flex-grow-1">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="postalCode"
                                    name="postalCode"
                                    placeholder="postalCode"
                                    value={inputs2.postalCode}
                                />
                                <label htmlFor="postalCode">Códido postal</label>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <button className="w-50 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Guardar
                            Cambios
                        </button>
                    </div>
                </div>
            </form>
        </div>
        </>
        )
    }
}

export default Perfil