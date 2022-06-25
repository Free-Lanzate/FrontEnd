import {React,useEffect, useState} from 'react'
import { traerItemsCanasta } from '../api/canasta'
import {Table, Button} from "react-bootstrap";
import { eliminarItem } from '../api/canasta';
import CambiarCantidad from '../components/CambiarCantidad';


const Carrito = () => {
  
  const[items, setItems] = useState([])

 //console.log(data.newQuantity)

  useEffect(() => {
      traerItemsCanasta(1).then(response => {
          setItems(response);
      })
    }, [])

    function refreshPage() {
        window.location.reload(false);
      }

    const eliminar = async (postId) =>{
        const result = await eliminarItem(1, postId);
        console.log(result)
        refreshPage()
      }

    //console.table(items)
    //console.log(cantidad)

  return (
      <div className="contenedorPerfil text-center d-flex">
        <div className="container rounded row w-100">
              <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son
              los productos y servicios que están en tu carrito:</h5>
          {
              items.map((items, index)=>(
                  <div>
                      <p className="text-center fw-bold w-100 badge">Item # {index+1}</p>

                      <Table hover>
                          <thead>
                          <tr className="table-primary welcome">
                              <th colSpan="2">Producto o Servicio Adquirido</th>
                              <th>Cantidad</th>
                              <th>Freelancer</th>
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
                                    {items.Post.postTitle}
                                </td>
                                <td>
                                    {items.quantity}
                                </td>
                                <td>
                                    {items.Post.Freelancer.User.firstName + " " + items.Post.Freelancer.User.lastName}
                                </td>
                            </tr>

                          </tbody>
                      </Table>
                      <div className="d-flex w-100">
                          <p className="me-auto my-auto"><b>Precio resultante: </b>${items.Post.postPrice * items.quantity} pesos colombianos</p>
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
  )
}

export default Carrito