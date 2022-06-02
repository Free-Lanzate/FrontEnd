import {React, useState, useEffect} from 'react'
import { buscarAnuncios } from '../api/buscar'
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import { ModalAnuncio } from './ModalAnuncio';

export const Anuncios = () => {

  const[anuncio, setAnuncio] = useState([])
  const[modal, setModal] = useState(false)

  useEffect(() => {
    buscarAnuncios().then(response => {
      setAnuncio(response);
    })
  }, [])

  const mostrar= () =>{
    console.log('entro')
    return setModal(true)
    
  }

  console.log(anuncio)

  const tableRows=anuncio.map((anuncio)=>{
    return( 
      <tr key = {anuncio.id}>
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
          <Button onClick={mostrar}>saber más...</Button>
        </td>
        {
          modal === true ? <ModalAnuncio anuncio={anuncio}/> : ""
        }
      </tr>
    )
  }
  )
return(
  <div>
    <div className="d-flex align-items-center justify-content-center">
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
    </div>
  </div>
  )
}


