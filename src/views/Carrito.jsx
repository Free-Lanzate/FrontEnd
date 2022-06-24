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
          <h5 className=" welcome mb-3 fw-bold">Carrito</h5>
          <div className="col contenedorPerfil d-flex">
          <div className="row container rounded w-100">
              <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son
              los productos y servicios que hay en tu carrito:</h5>
          {
              items.map((items)=>(
                  <div>
                      <p className="text-center fw-bold w-100 badge">Orden # {items.id}</p>
                      
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
                            <div className="d-flex w-100">
                                <p className="me-auto"><b>Valor </b>${items.Post.postPrice * items.quantity} pesos colombianos</p>
                            </div>
                            <CambiarCantidad id = {items.id} cantidad = {items.quantity}/> 
                            <Button onClick={() => eliminar(items.postId)}>
                                eliminar
                            </Button> 
                          </tbody>
                      </Table>
                      <hr className="separador"/>
                  </div>
                ))
              }
          </div>
      </div>
        </div>
      </div>
  )
}

export default Carrito