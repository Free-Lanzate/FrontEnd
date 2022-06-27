import {React,useEffect, useState} from 'react'
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../api/auth";
import {verOrdenes} from "../api/orders";
import Table from "react-bootstrap/Table";


const Ordenes = () => {

    const UserId = jwtDecode(getAccessToken()).sub.id;
    const[ordenes, setOrdenes] = useState([])

    useEffect(() => {
        verOrdenes(UserId).then(response => {
            setOrdenes(response);
        })
    }, [UserId])

    console.log(ordenes)

    const fecha = (date) => {
        return(date.toLocaleDateString('es-ES', {year: 'numeric', month: 'long', day: 'numeric'
        ,weekday:'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'shortGeneric'}))
    }

    return (
      <div className="col contenedorPerfil d-flex">
          <div className="row container rounded w-100">
              <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son
              los productos y servicios que has adquirido:</h5>
          {
              ordenes.map((orden, index)=>(
                  <div>
                      <p className="text-center fw-bold w-100 badge">Orden # {index+1}</p>
                      <div className="d-flex w-100">
                          <p className="me-auto"><b>Valor total: </b>${orden.orderTotal} pesos colombianos</p>
                          <p><b>Fecha: </b>{fecha(new Date(orden.createdAt))}</p>
                      </div>
                      <Table hover>
                          <thead>
                          <tr className="table-primary welcome">
                              <th className="text-center" colSpan="2">Producto o Servicio Adquirido</th>
                              <th>Freelancer</th>
                              <th></th>
                          </tr>
                          </thead>
                          <tbody className="align-middle">
                          {
                              orden.OrderItems.map((item)=>(
                                  <tr>
                                      <td> 
                                        <img src={`http://localhost:8000/images/${item.Post.thumbnailUrl}`} alt="Imagen" width="180" height="180"/>
                                      </td>
                                      <td>
                                          {item.Post.PostTitle}
                                      </td>
                                      <td>
                                          {item.Post.Freelancer.User.firstName + " " + item.Post.Freelancer.User.lastName}
                                      </td>
                                      <td>
                                          <button className="btn btn-primary fw-bold float-end">Reseñar »</button>
                                      </td>
                                  </tr>))
                          }
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

export default Ordenes