import { idCategoria, nombreCategoria } from "../../utils/tokens";
import {React, useState, useEffect} from 'react'
import { buscarAnunciosPorCategoria } from '../../api/buscar'
import Table from 'react-bootstrap/Table';
import ModalAnuncio from "../ModalAnuncio";


 const Categoria = () => {
  const[anuncio, setAnuncios] = useState([])

  useEffect(() => {
    buscarAnunciosPorCategoria(localStorage.getItem(idCategoria)).then(response => {
      setAnuncios(response);
    })
  }, [])

  function volver(){
    window.location.href = "buscar";
  }

  
return(
  <div>
    <div>Estos son los resultados para la categoria {localStorage.getItem(nombreCategoria)}</div>
    <Table hover>
        <thead>
          <tr>    
            <th>Anuncios</th>
            <th>Precio</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
        {
          anuncio.map((anuncio)=>( 
            <tr>
              <td>
                {anuncio.postTitle}
                </td>
                <td>
                {anuncio.postPrice}
                </td>
                <td>
                {anuncio.postDescription}
                </td>
              <td>
                <ModalAnuncio anuncio={anuncio} />
              </td>
            </tr>))
            }
        </tbody>
    </Table>      
    <button onClick={volver}>Volver</button>  
  </div>
  )
}


export default Categoria


