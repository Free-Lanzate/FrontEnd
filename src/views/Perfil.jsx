import React from 'react'
import Logo from "../assets/images/Logo.png";
import {showHide} from "../utils/passwordVisibility";
import {Link} from "react-router-dom";
import{getAccessToken} from "../api/auth"
import jwtDecode from "jwt-decode";


const Perfil = () => {

    const user = jwtDecode(getAccessToken())
  
  return (
      <div className="contenedorPerfil text-center d-flex">
          <div className="container rounded row w-100">
              <h5 className=" welcome mb-3 fw-bold">Datos de facturación</h5>
              <form>
                  <div className="row mt-3">
                      <div className="form-floating">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="dir"
                              name="dir"
                              placeholder="dir"
                              value = {user.sub.location}
                              readOnly
                          />
                          <label htmlFor="dir" className="ms-3">Dirección</label>
                      </div>
                  </div>
              </form>
              <h5 className="mt-5 welcome mb-3 fw-bold">Datos del usuario</h5>
              <form>
                  <div className="row mt-3">
                      <div className="form-floating col">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="dir"
                              name="dir"
                              placeholder="dir"
                              value = {user.sub.firstName}
                              readOnly
                          />
                          <label htmlFor="password" className="ms-3">Nombres</label>
                      </div>
                      <div className="form-floating col">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="dir"
                              name="dir"
                              placeholder="dir"
                              value = {user.sub.lastName}
                              readOnly
                          />
                          <label htmlFor="password" className="ms-3">Apellidos</label>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="form-floating col">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="dir"
                              name="dir"
                              placeholder="dir"
                              value = {user.sub.email}
                              readOnly
                          />
                          <label htmlFor="password" className="ms-3">Correo electrónico</label>
                      </div>
                      <div className="form-floating col">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="dir"
                              name="dir"
                              placeholder="dir"
                              value = {user.sub.username}
                              readOnly
                          />
                          <label htmlFor="password" className="ms-3">Nombre de usuario</label>
                      </div>
                  </div>
              </form>
          </div>

      </div>
  )
}

export default Perfil