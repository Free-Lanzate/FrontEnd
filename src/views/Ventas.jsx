import {React,useEffect, useState} from 'react'
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../api/auth";
import Table from "react-bootstrap/Table";
import { traerVentas } from '../api/ventas';

const Ventas = () => {
    const UserId = jwtDecode(getAccessToken()).sub.id;
    const[ventas, setVentas] = useState([])

    useEffect(() => {
        traerVentas(UserId).then(response => {
            setVentas(response);
        })
    }, [UserId])

    console.log(ventas)

    
    const fecha = (date) => {
        return(date.toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric'
        ,weekday:'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'shortGeneric'}))
    }

    return (
      <div className="col contenedorPerfil d-flex">
          <div className="row container rounded w-100">
              <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son
              los productos y servicios que has vendido:</h5>
          {
              ventas.map((ventas, index)=>(
                  <div>
                      <p className="text-center fw-bold w-100 badge">Orden # {index+1}</p>
                      <div className="d-flex w-100">
                          <p className="me-auto"><b>Valor total: </b>${ventas.orderTotal} pesos colombianos</p>
                          <p><b>Fecha: </b>{fecha(new Date(ventas.createdAt))}</p>
                      </div>
                      <Table hover>
                          <thead>
                          <tr className="table-primary welcome">
                              <th className="text-center" colSpan="2">Producto o Servicio vendido</th>
                              <th>descripción</th>
                              <th>cantidad</th>
                              <th></th>
                          </tr>
                          </thead>
                          <tbody className="align-middle">
                            <tr>
                                <td>
                                    <svg
                                        className="bd-placeholder-img rounded" width="160" height="90" role="img">
                                        <title>Placeholder</title>
                                        <rect width="100%" height="100%" fill="#eee"></rect>
                                        <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                                    </svg>
                                </td>
                                <td>
                                    {ventas.PostTitle}
                                </td>
                                <td>
                                    {ventas.postDescription}
                                </td>
                                <td>
                                    {ventas.itemAmount}
                                </td>
                                <td>
                                    <button className="btn btn-primary fw-bold float-end">Reseñar »</button>
                                </td>
                            </tr>
                          </tbody>
                      </Table>
                      <hr className="separador"/>
                  </div>
              ))
            }
          </div>
      </div>
  )
}

export default Ventas