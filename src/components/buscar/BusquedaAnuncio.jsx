import {React, useState} from 'react'
import { buscarAnunciosPorPalabra } from '../../api/buscar';
import Table from 'react-bootstrap/Table';
import ModalAnuncio from '../ModalAnuncio';

const BusquedaAnuncioio = () => {

  const [input, setInput] = useState({
    buscar: ""
  });

  const [resultado, setResultado] = useState()

  const changeForm = e => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const buscarPalabra = async e =>{
    e.preventDefault();
    const resultadoBusqueda = await buscarAnunciosPorPalabra(input.buscar);
    setResultado(resultadoBusqueda)
  }


  if (!resultado) {
    return(
      <div>
        <div onChange={changeForm} onSubmit={buscarPalabra}>
          <form>
            ¿No encuentras lo que necesitas? Buscalo directamente acá
            <div>
              <input
                  type="text"
                  className="form-control mb-3"
                  id="buscar"
                  name="buscar"
                  placeholder="buscar..."
              />
            </div>
            <button type="submit">
            Buscar
            </button>
          </form>
        </div>
      </div>
    )
  }else{
    return (
      <div>
        <div onChange={changeForm} onSubmit={buscarPalabra}>
          <form>
            ¿No encuentras lo que necesitas? Buscalo directamente acá
            <div>
              <input
                  type="text"
                  className="form-control mb-3"
                  id="buscar"
                  name="buscar"
                  placeholder="buscar..."
              />
            </div>
            <button type="submit">
            Buscar
            </button>
          </form>
        </div>
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
              resultado.map((resultado)=>( 
              <tr>
                <td>
                  {resultado.postTitle}
                  </td>
                  <td>
                  {resultado.postPrice}
                  </td>
                  <td>
                  {resultado.postDescription}
                  </td>
                <td>
                  <ModalAnuncio anuncio={resultado} />
                </td>
              </tr>))
            }
          </tbody>
      </Table>      
    </div>
  )
  }
}

export default BusquedaAnuncioio