import React from 'react'
import Logo from "../assets/images/Logo.png";
import {showHide} from "../utils/passwordVisibility";
import {Link} from "react-router-dom";


const Perfil = () => {
  
  return (
      <div className="contenedorPerfil text-center d-flex">
          <div className="container rounded row">
              <h5 className=" welcome mb-3 fw-bold">Datos de facturación</h5>
              <form>
                  <div className="row mt-3">
                      <div className="col">
                          <select className="">
                              <option value="">País</option>
                          </select>
                      </div>
                      <div className="col">
                          <select className="">
                              <option value="">Ciudad</option>
                          </select>
                      </div>
                      <div className="col-md-5">
                          <select className="">
                              <option value="">Código Postal</option>
                          </select>
                      </div>
                  </div>
                  <div className="row mt-3">
                      <div className="form-floating col-lg-10">
                          <input
                              type="text"
                              className="form-control mb-3"
                              id="dir"
                              name="dir"
                              placeholder="dir"
                          />
                          <label htmlFor="password" className="ms-3">Dirección</label>
                      </div>
                      <div className="col">
                          <button className="w-75 btn btn-lg btn-primary fw-bold" type="submit">Ingresar</button>
                      </div>
                  </div>
              </form>
          </div>
      </div>
  )
}

export default Perfil