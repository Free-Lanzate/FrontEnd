import React, {useState, useEffect} from 'react'
import Logo from "../assets/images/Logo.png";
import {showHide} from "../utils/passwordVisibility";
import {Link} from "react-router-dom";
import{getAccessToken} from "../api/auth"
import jwtDecode from "jwt-decode";
import {miPerfil, editarPerfil, registroFreelancer} from "../api/user";
import {notification} from "antd";


const Perfil = () => {

    const UserId = jwtDecode(getAccessToken()).sub.id;

    const [inputs, setInputs] = useState({
        location: "",
        firstName: "",
        lastName: "",
        email: "",
        username: ""
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

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const guardarCambios = async e => {
        e.preventDefault();

        const result = await editarPerfil(UserId,inputs);
        if (result.message === "User was updated successfully.") {
            notification["success"]({
                message: "User was updated successfully."
            });
            resetForm();
            window.location.href = "/";
        }
    }

    const resetForm = () => {
        setInputs({
            location: "",
            firstName: "",
            lastName: "",
            email: "",
            username: ""
        });
    };

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
                          <label htmlFor="password" className="ms-3">Nombres</label>
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
                          <label htmlFor="password" className="ms-3">Apellidos</label>
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
                          <label htmlFor="password" className="ms-3">Correo electrónico</label>
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
                          <label htmlFor="password" className="ms-3">Nombre de usuario</label>
                      </div>
                  </div>
                <div className="row mt-5">
                    <button className="w-50 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Guardar Cambios</button>
                </div>
              </div>
          </form>
      </div>
  )
}

export default Perfil