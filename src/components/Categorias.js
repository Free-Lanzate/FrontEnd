import {React, useState, useEffect} from 'react'
import { buscarCategoria } from '../api/buscar';
import Table from 'react-bootstrap/Table';
import { idCategoria, nombreCategoria } from '../utils/tokens';
import Audio from "../assets/images/Categorias/Audio.jpg"
import Confeccion from '../assets/images/Categorias/ConfeccionIcono.jpg'
import DiseñoGrafico from '../assets/images/Categorias/DiseñoGrafico.jpg'
import Limpieza from '../assets/images/Categorias/Limpieza.jpg'
import Programacion from '../assets/images/Categorias/programacion.jpg'
import Traduccion from '../assets/images/Categorias/Traduccion.jpg'
import VideoAnimacion from '../assets/images/Categorias/VideoAnimacion.jpg'




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

    function imagen(categoryName) {
      switch (categoryName) {
        case "Programacion y tecnología": 
          return (<img src={Programacion} alt="Imagen" width="180" height="180"/>)
          break;
        case "Diseno Grafico": 
          return <img src={DiseñoGrafico} alt="Imagen" width="180" height="180"/>
          break;
        case "Video y animación": 
          return <img src={VideoAnimacion} alt="Imagen" width="180" height="180"/>
          break;
          case "Audio": 
          return <img src={Audio} alt="Imagen" width="180" height="180"/>
          break;
          case "Traducción": 
          return <img src={Traduccion} alt="Imagen" width="180" height="180"/>
          break;
          case "Limpieza": 
          return <img src={Limpieza} alt="Imagen" width="180" height="180"/>
          break;
          case "Confección": 
           return <img src={Confeccion} alt="Imagen" width="180" height="180"/>
          break;
      
        default:
          return (
          <svg
              className="bd-placeholder-img rounded" width="160" height="90" role="img">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#eee"></rect>
              <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
          </svg>)
          break;
      }
      
    }

    console.log(category)
    

  const tableRows=category.map((category)=>{
        return( 
          <tr>
              <td>
              {imagen(category.categoryName)}
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

