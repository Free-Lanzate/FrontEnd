import {React, useState, useEffect} from 'react'
import { buscarCategoria } from '../api/buscar';
import Table from 'react-bootstrap/Table';
import { idCategoria, nombreCategoria } from '../utils/tokens';




export const Categorias = () => {
  const[category, setCategory] = useState([])

  useEffect(() => {
    buscarCategoria().then(response => {
      setCategory(response);
    })
  }, [])

  function mostrar(category){
    localStorage.setItem(idCategoria, category.id);
    localStorage.setItem(nombreCategoria, category.categoryName);
    window.location.href = "./buscarcategoria";
    }

    

  const tableRows=category.map((category)=>{
        return( 
          <tr>
              <td>
                  <svg
                      className="bd-placeholder-img rounded" width="160" height="90" role="img">
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#eee"></rect>
                      <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                  </svg>
              </td>
            <td className="text-center">
              {category.categoryName}
            </td>
            <td>
              <button className="btn btn-primary fw-bold float-end" onClick={() => (mostrar(category))}>Saber más »</button>
            </td>
          </tr>
        )
    }
)

  return(
    <div>
      <p className="text-center mb-3">Aquí podrás navegar entre todas las categorías disponibles para encontrar productos y servicios afines con tus intereses.</p>
      <Table className="align-middle" hover>
          <thead className="text-center">
            <tr className="table-primary welcome">
                <th></th>
              <th>Categoría</th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>
    </div>
)
}

