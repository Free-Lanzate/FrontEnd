import {React,useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { traerItemsCanasta, traerSesion, terminarCompra } from '../api/canasta'
import {Table} from "react-bootstrap";
import { eliminarItem } from '../api/canasta';
import CambiarCantidad from '../components/CambiarCantidad';
import jwtDecode from "jwt-decode";
import {getAccessToken} from "../api/auth";



const Carrito = () => {
  
  const UserId = jwtDecode(getAccessToken()).sub.id;
  const[items, setItems] = useState([])
  const [sesion ,setSesion] = useState([])

  useEffect(() => {
      traerItemsCanasta(UserId).then(response => {
          setItems(response);
      })
    }, [])

    useEffect(() => {
      traerSesion(UserId).then(response => {
        setSesion(response);
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

    const finalizarCompra = async e =>{
      const result = await terminarCompra(UserId);
        console.log(result)
        refreshPage()
    }

    //console.log(items)
    //console.log(cantidad)

    if (items.length === 0) {
        return(
            <div className="contenedorPerfil text-center d-flex">
                <div className="container rounded row w-100">
                    <div className="col contenedorPerfil d-flex">
                        <div className="row container rounded w-100">
                            <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son los productos y servicios que hay en tu carrito:</h5>
                            <div>
                                ¡Al parecer tu carrito se encuantra vacio!
                                <br/>
                                <Link to="/freelanzer/buscar">
                        <span>
                            ¡Haz click acá para buscar eso que necesitas!
                            <i className="bi bi-search me-3"> </i>
                        </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else {
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
                                            {items.Post.Freelancer.User.firstName + " " + items.Post.Freelancer.User.lastName}
                                        </td>
                                    </tr>

                                    </tbody>
                                </Table>
                                <div className="d-flex w-100">
                                    <p className="me-auto my-auto"><b>Precio unitario: </b>${items.Post.postPrice} pesos colombianos</p>
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
                <div className="row col container rounded w-50 h-100">
                    <div>
                        <h5 className=" welcome mb-3 fw-bold">
                            <i className="bi bi-cart4 me-3"></i>
                            Resumen de tu carrito
                        </h5>
                        <hr className="separador"/>
                        {items.map((items, index)=>(
                            <div>
                                <p className="text-center fw-bold w-100 badge">{items.Post.postTitle}</p>
                                <p className="me-auto"><b className="welcome1">Unidades de producto / Horas de servicio:
                                </b> {items.quantity}</p>
                                <p className="me-auto"><b className="welcome1">Precio resultante:
                                </b> ${items.Post.postPrice * items.quantity} pesos colombianos</p>
                                <hr/>
                            </div>
                        ))}
                        <div className="welcome2 row d-flex mt-4">
                            <div className="col-5">
                                <strong>Precio total:</strong>
                            </div>
                            <div className="col-3 text-right">
                                <strong>$ {sesion.total} </strong>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-primary mt-4 mb-2 w-75 mx-auto fw-bold" onClick={finalizarCompra}>
                                Realizar Compra
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carrito