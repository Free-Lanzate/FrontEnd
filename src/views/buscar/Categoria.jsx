import { idCategoria, nombreCategoria } from "../../utils/tokens";
import {React, useState, useEffect} from 'react'
import { buscarAnunciosPorCategoria } from '../../api/buscar'
import Table from 'react-bootstrap/Table';


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

  const tableRows=anuncio.map((anuncio)=>{
    return( 
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
          <button onClick={() => console.log("algo va a pasar...")}>saber más...</button>
        </td>
      </tr>
    )
  }
  )
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
          {tableRows}
        </tbody>
    </Table>      
    <button onClick={volver}>Volver</button>  
  </div>
  )
}


export default Categoria


