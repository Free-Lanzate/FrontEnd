import React, {useState, useEffect} from 'react'
import Logo from "../assets/images/Logo.png";
import {showHide} from "../utils/passwordVisibility";
import {Link} from "react-router-dom";
import{getAccessToken, logout} from "../api/auth"
import jwtDecode from "jwt-decode";
import {miPerfil, editarPerfil, registroFreelancer} from "../api/user";
import {notification} from "antd";
import {emailValidation, minLengthValidation} from "../utils/formValidation";


const Perfil = () => {

    const UserId = jwtDecode(getAccessToken()).sub.id;

    const [inputs, setInputs] = useState({
        location: "",
        firstName: "",
        lastName: "",
        email: "",
        username: "",
    });

    const profile = async () => {
        const user = await miPerfil(UserId);
        setInputs({
            ...inputs,
            location: user.location,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            username: user.username
        });
    }

    useEffect(() => {
        profile();
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

    const inputValidation = e => {
        const { type, name } = e.target;
        if (type === "password") {
            setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
        }
    };

    const guardarCambios = async e => {
        e.preventDefault();
        const passwordVal = inputs.newPassword;
        const repeatPasswordVal = inputs.repeatPassword;
        if (passwordVal !== repeatPasswordVal) {
            notification["error"]({
                message: "Las contraseñas tienen que ser iguales."
            });
        } else {
            const result = await editarPerfil(UserId, inputs);
            if (result.message === "User was updated successfully.") {
                notification["success"]({
                    message: "User was updated successfully."
                });
                resetForm();
                window.location.href = "/";
            }
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

    function changePassword(){
        logout();
        window.location.href = "/clave/" + inputs.email
    }

  return (
      <div className="contenedorPerfil text-center d-flex">
          <form className="d-flex" onChange={changeForm} onSubmit={guardarCambios}>
          <div className="container rounded row w-100">
              <h5 className=" welcome mb-3 fw-bold">Datos de facturación</h5>
                  <div className="row mt-3">
                      <div className="form-floating">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="location"
                              name="location"
                              placeholder="location"
                              value = {inputs.location}
                          />
                          <label htmlFor="dir" className="ms-3">Dirección</label>
                      </div>
                  </div>
              <h5 className="mt-5 welcome mb-3 fw-bold">Datos del usuario</h5>
                  <div className="row mt-3">
                      <div className="form-floating col">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="firstName"
                              name="firstName"
                              placeholder="firstName"
                              value = {inputs.firstName}
                          />
                          <label htmlFor="firstName" className="ms-3">Nombres</label>
                      </div>
                      <div className="form-floating col">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="lastName"
                              name="lastName"
                              placeholder="lastName"
                              value = {inputs.lastName}
                          />
                          <label htmlFor="lastName" className="ms-3">Apellidos</label>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="form-floating col">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="email"
                              name="email"
                              placeholder="email"
                              value = {inputs.email}
                          />
                          <label htmlFor="email" className="ms-3">Correo electrónico</label>
                      </div>
                      <div className="form-floating col">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="username"
                              name="username"
                              placeholder="username"
                              value = {inputs.username}
                          />
                          <label htmlFor="username" className="ms-3">Nombre de usuario</label>
                      </div>
                  </div>
              <p className="mt-5 mb-3">¿Desea cambiar su contraseña? Haga clic<b className="badge" onClick={changePassword}>aquí</b></p>
                <div className="row mt-4">
                    <button className="w-50 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Guardar Cambios</button>
                </div>
              </div>
          </form>
      </div>
  )
}

export default Perfil