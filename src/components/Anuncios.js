import {React, useState, useEffect} from 'react'
import { buscarAnuncios } from '../api/buscar'
import Table from 'react-bootstrap/Table';
import ModalAnuncio from './ModalAnuncio'
import BusquedaAnuncio from './buscar/BusquedaAnuncio';

export const Anuncios = () => {

  const[anuncio, setAnuncio] = useState([])

  useEffect(() => {
    buscarAnuncios().then(response => {
      setAnuncio(response);
    })
  }, [])


return(
  <div>
    <BusquedaAnuncio/>
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
    </div>
  </div>
  )
}


