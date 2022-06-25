import {React,useEffect, useState} from 'react'
import { traerItemsCanasta } from '../api/canasta'
import {Table} from "react-bootstrap";
import { eliminarItem } from '../api/canasta';
import CambiarCantidad from '../components/CambiarCantidad';
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../api/auth";



const Carrito = () => {
  
  const UserId = jwtDecode(getAccessToken()).sub.id;
  const[items, setItems] = useState([])

  useEffect(() => {
      traerItemsCanasta(UserId).then(response => {
          setItems(response);
      })
    }, [])

    function refreshPage() {
        window.location.reload(false);
      }

    const eliminar = async (postId) =>{
        const result = await eliminarItem(UserId, postId);
        console.log(result)
        refreshPage()
      }

    //console.table(items)
    //console.log(cantidad)

  return (
      <div className="contenedorPerfil text-center d-flex">
        <div className="container rounded row w-100">
          <div className="col contenedorPerfil d-flex">
          <div className="row container rounded w-100">
              <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son
              los productos y servicios que hay en tu carrito:</h5>
          {
              items.map((items, index)=>(
                  <div>
                      <p className="text-center fw-bold w-100 badge">Item # {index+1}</p>

                      <Table hover>
                          <thead>
                          <tr className="table-primary welcome">
                              <th >Producto o Servicio Adquirido</th>
                              <th>Cantidad</th>
                              <th>Freelancer</th>
                          </tr>
                          </thead>
                          <tbody>
                            <tr>
                                <th>
                                    {items.Post.postTitle}
                                </th>
                                <th>
                                    {items.quantity}
                                </th>
                                <th>
                                    {items.Post.Freelancer.User.firstName + " " + items.Post.Freelancer.User.lastName}
                                </th>
                            </tr>

                          </tbody>
                      </Table>
                      <div className="d-flex w-100">
                          <p className="me-auto"><b>Valor </b>${items.Post.postPrice * items.quantity} pesos colombianos</p>
                          <CambiarCantidad className="float-end" id = {items.id} cantidad = {items.quantity}/>
                          <button className="btn2 rounded mt-2 mb-3 fw-bold" onClick={() => eliminar(items.postId)}>
                              Eliminar
                          </button>
                      </div>
                      <hr className="separador"/>
                  </div>
                ))
              }
          </div>
      </div>
        </div>
          <div>
            <div className="row container rounded w-100">
              Carrito
              <div>
            <>
              <hr className="separador"/>
              {items.map((items, index)=>(
                  <div>
                      <p className="text-center fw-bold w-100 badge">Item # {index+1}</p>
                      <p className="me-auto"><b>Valor </b>${items.Post.postPrice * items.quantity} pesos colombianos</p>
                      <hr/>     
                  </div>
                ))}
              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>$</strong>
                </div>
              </div>
              <div className="row">
                <button onClick={() => alert('Implement Checkout!')}>
                  Checkout
                </button>
              </div>
            </>
        </div>
            </div>
        </div>
      </div>
  )
}

export default Carrito