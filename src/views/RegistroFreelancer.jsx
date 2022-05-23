import React,{useState} from 'react';
import { notification } from "antd";
import { emailValidation, minLengthValidation} from "../utils/formValidation";
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {showHide} from "../utils/passwordVisibility"



const RegistroFreelancer = () => {

    const style = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh'
    }

  return (
    <div className="reg text-center d-flex" style={style}>
        <div className="form-signin rounded max-w-reg my-auto">
            <form>
                <img className="mb-4 d-flex justify-content-start" src={Logo} alt="Free-Lánzate"/>
                    <h5 className="welcome mb-3 fw-bold">¡Hola, freelancer!</h5>
                    <div className="row">
                        <div className="col-3 my-auto">
                            <p className="h5 mb-3 fw-bold text-gb">Ubicación</p>
                            <p>Registra los datos de tu residencia:</p>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col d-flex">
                                    <div className="form-floating mx-4 mt-2">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            id="pais"
                                            name="pais"
                                            placeholder="pais"
                                        />
                                        <label htmlFor="pais">País</label>
                                    </div>
                                    <div className="form-floating mx-4 mt-2">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            id="ciudad"
                                            name="ciudad"
                                            placeholder="ciudad"
                                        />
                                        <label htmlFor="ciudad">Ciudad</label>
                                    </div>
                                    <div className="form-floating mx-4 mt-2">
                                        <input
                                            type="number"
                                            className="form-control mb-3"
                                            id="postal"
                                            name="postal"
                                            placeholder="postal"
                                        />
                                        <label htmlFor="postal">Código Postal</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mx-4 mt-1">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            id="dir"
                                            name="dir"
                                            placeholder="dir"
                                        />
                                        <label htmlFor="dir">Dirección</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col">
                            <p className="h5 mb-3 fw-bold text-gb">Datos de contacto</p>
                            <div className="row">
                                <p className="text-start ms-4">Número de celular:</p>
                                <div className="input-group mx-4 mt-1">
                                    <div>
                                        <span className="input-group-text bg-b text-white mb-3"><i
                                            className="fa fa-whatsapp"> </i></span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control mb-3 mx-3"
                                        id="prefijo"
                                        name="prefijo"
                                        placeholder="+57"
                                    />
                                    <input
                                        type="text"
                                        className="form-control mb-3 w-50"
                                        id="cel"
                                        name="cel"
                                        placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="row my-3">
                                <div className="col text-center d-flex">
                                    <p className="text-start ms-4 my-auto">Redes sociales:</p>
                                    <span className="input-group-text bg-b text-white mx-4"><i
                                        className="fa fa-facebook-f"> </i> </span>
                                    <span className="input-group-text bg-b text-white mx-4"><i
                                        className="fa fa-instagram"> </i></span>
                                    <span className="input-group-text bg-b text-white mx-4"><i
                                        className="fa fa-linkedin"> </i></span>
                                    <i className="bi bi-three-dots ms-4"> </i>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <p className="h5 mb-3 fw-bold text-gb">Foto de perfil</p>
                            <div className="col d-flex">
                                <svg className="ms-5" height="100" width="100">
                                    <circle cx="50" cy="50" r="40" fill="grey"/>
                                </svg>
                                <button
                                    className="w-50 btn btn-lg btn-primary fw-bold mx-3 mt-4 mb-3 d-flex align-items-center bg-b">
                                    Cargar archivo
                                    <i className="bi bi-folder-fill button-icon2"> </i>
                                </button>
                            </div>
                            <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mt-4 mb-3"
                                    type="submit">Finalizar Inscripción
                            </button>
                        </div>
                    </div>
            </form>
        </div>
    </div>
  )
}

export default RegistroFreelancer