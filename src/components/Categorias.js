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
              
              {category.categoryName}
              
              </td>
            <td>
              <button onClick={() => (mostrar(category))}>saber más...</button>
            </td>
          </tr>
        )
    }
)

  return(
    <div>
        
      <Table hover>
          <thead>
            <tr>    
              <th>Categoria</th>
              
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>  

         
          
    </div>
)
}

