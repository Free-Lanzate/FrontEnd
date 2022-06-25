import {React, useState, useEffect} from 'react'
import { buscarRecomendaciones } from '../api/buscar'
import ModalAnuncio from '../components/ModalAnuncio'
import Table from 'react-bootstrap/Table';


const Recomendaciones = () => {

  const[recomendacion, setRecomendacion] = useState([])

  useEffect(() => {
    buscarRecomendaciones().then(response => {
      setRecomendacion(response);
    })
  }, [])

  return (
      <div className="contenedorPerfil text-center d-flex">
        <div className="container rounded row w-100">
          <h5 className=" welcome mb-3 fw-bold">Recomendaciones</h5>
          <div className="col contenedorPerfil d-flex">
            <div className="row container rounded w-100">
              <h5 className="text-center welcome2 rounded-pill mb-3 fw-bold">Estos son
                los productos y servicios que te recomendamos</h5>
            <div className="d-flex align-items-center justify-content-center">
          <Table hover>
            <thead>
            <tr className="table-primary welcome">
              <th colSpan="2" className="text-center">Anuncios</th>
              <th>Precio</th>
              <th className="text-center">Descripción</th>
              <th></th>
            </tr>
            </thead>
            <tbody className="align-middle">
            {
              recomendacion.map((recomendacion)=>(
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
                      {recomendacion.postTitle}
                    </td>
                    <td>
                      ${recomendacion.postPrice}
                    </td>
                    <td>
                      {recomendacion.postDescription}
                    </td>
                    <td>
                      <ModalAnuncio anuncio={recomendacion} />
                    </td>
                  </tr>))
            }
            </tbody>
          </Table>
        </div>
          </div>
        </div>
        
      </div>
      </div>
  )
}

export default Recomendaciones