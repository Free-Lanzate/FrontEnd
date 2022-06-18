import {React, useState} from 'react'
import { buscarFreelancerPorPalabra } from '../../api/buscar';
import Table from 'react-bootstrap/Table';
import ModalFreelancer from '../ModalFreelancer';

const BusquedaFreelancer = () => {
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
        const resultadoBusqueda = await buscarFreelancerPorPalabra(input.buscar);
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
                  <th>Nombre</th>
                  <th>Usuario</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {
                  resultado.map((resultado)=>( 
                  <tr>
                    <td>
                      {resultado.User.firstName + " " + resultado.User.lastName}
                      </td>
                      <td>
                      {resultado.User.username}
                      </td>
                      <td>
                      {resultado.freelancerRating}
                      </td>
                    <td>
                      <ModalFreelancer freelancer={resultado.User} />
                    </td>
                  </tr>))
                }
              </tbody>
          </Table>      
        </div>
      )
      }
}

export default BusquedaFreelancer
