import React, {useState} from 'react'
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {recoverPassword} from "../api/recover";
import {notification} from "antd";

const RecuperarPassword = () => {

    const style = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh'
    }

    const [inputs, setInputs] = useState({
        email: "",
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const enviarCorreo = async e => {
        e.preventDefault();
        const result = await recoverPassword(inputs);
        if (result === "El email para la recuperación ha sido enviado") {
            notification["success"]({
                message: "El email para la recuperación ha sido enviado"
            });
            resetForm();
            window.location.href = "/login";
        }
    }

    const resetForm = () => {
        setInputs({
            email: "",
        });
    };

    return (
      <div className="forgot text-center d-flex" style={style}>
        <div className="form-signin rounded max-w-forgp my-auto">
            <form onSubmit={enviarCorreo} onChange={changeForm}>
                <img className="w-25 mb-4 d-flex justify-content-start" src={Logo} alt="Free-Lánzate"/>
                <h5 className="welcome mb-3 fw-bold">¿Olvidaste tu contraseña?</h5>
                <div className="form-floating w-75 mx-auto mt-5">
                    <input
                            type="email"
                            className="form-control mb-5"
                            id="email"
                            name="email"
                            placeholder="username"
                    />
                    <label htmlFor="email">Correo electrónico</label>
                </div>
                <div>
                    <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mb-3 d-flex align-items-center" type="submit">Recuperar ahora <i className="bi bi-envelope-fill button-icon"></i></button>
                </div>
            </form>
        </div>
      </div>
    )
}

export default RecuperarPassword