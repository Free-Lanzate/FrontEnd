import React, {useState, useEffect} from 'react'
import {notification} from "antd";
import {anuncia} from "../api/posts";
import{getAccessToken} from "../api/auth"
import jwtDecode from "jwt-decode";
import {buscarCategoria} from "../api/buscar";
import {Link} from "react-router-dom";

const Tarifas = () => {

  return (
      <div className="contenedorPerfil text-center d-flex">
        <form className="container rounded row">
          <h5 className=" welcome mb-3 fw-bold">Selecciona uno de los siguientes planes:</h5>
          <div className="col">
            <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Gratuito</h5>
            <p>Descripción del plan</p>
            <input type="radio" id="gratis" name="gratis" value="0"/>
              <label htmlFor="gratis" className="badge">¡Quiero tomar este plan!</label>
          </div>
          <div className="col">
            <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estándar</h5>
            <p>Descripción del plan</p>
            <input type="radio" id="estandar" name="estandar" value="15000"/>
            <label htmlFor="estandar" className="badge">¡Quiero tomar este plan!</label>
          </div>
          <div className="col">
            <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Pro</h5>
            <p>Descripción del plan</p>
            <input type="radio" id="pro" name="pro" value="35000"/>
            <label htmlFor="pro" className="badge">¡Quiero tomar este plan!</label>
          </div>
          <Link to="../anuncio" className="w-75 btn btn-lg btn-primary fw-bold mx-auto mt-4">
            Continuar
          </Link>
        </form>
      </div>
  )
}

export default Tarifas