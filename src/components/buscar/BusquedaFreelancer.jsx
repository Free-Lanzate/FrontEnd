import {React, useState} from 'react'
import { buscarFreelancerPorPalabra } from '../../api/buscar';
import Table from 'react-bootstrap/Table';
import ModalFreelancer from '../ModalFreelancer';

const BusquedaFreelancer = (props) => {

    const freelancer = props.freelancer

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

      const starRating = (num) =>{
        switch (num){
          case 1:
            return "★☆☆☆☆"
          case 2:
            return "★★☆☆☆"
          case 3:
            return "★★★☆☆"
          case 4:
            return "★★★★☆"
          case 5:
            return "★★★★★"
        }
      }

      const freelancerRating = (num) => {
        return <p className="stars">{starRating(num)}</p>
      }
    
    
      if (!resultado) {
        return(
          <div>
            <p className="text-center mb-3">Aquí podrás conocer a todos los freelancers que hacen uso de esta plataforma.</p>
            <div onChange={changeForm} onSubmit={buscarPalabra}>
              <form>
                <div className="d-flex mb-3">
                  <div className="form-floating w-100 me-4">
                    <input
                        type="text"
                        className="form-control"
                        id="buscar"
                        name="buscar"
                        placeholder="buscar"
                    />
                    <label htmlFor="buscar">¿No encuentras lo que necesitas? Búscalo aquí directamente</label>
                  </div>
                  <button className="btn2 rounded btn-primary fw-bold mb-2" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <Table hover>
                <thead>
                  <tr className="table-primary welcome">
                    <th></th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th className="text-center">Rating</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="align-middle">
                {
                  freelancer.map((freelancer)=>(
                      <tr>
                        <td>
                          <svg
                              className="bd-placeholder-img rounded-circle" width="90" height="90" role="img">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#eee"></rect>
                            <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                          </svg>
                        </td>
                        <td>
                          {freelancer.firstName + " " + freelancer.lastName }
                        </td>
                        <td>
                          {freelancer.username}
                        </td>
                        <td className="text-center">
                          {freelancerRating(freelancer.freelancerRating)}
                        </td>
                        <td>
                          {freelancer.freelancerDescription}
                        </td>
                        <td>
                          <ModalFreelancer freelancer={freelancer}/>
                        </td>
                      </tr>))
                }
                </tbody>
              </Table>
            </div>
          </div>
        )
      }else{
        return (
          <div>
            <p className="text-center mb-3">Aquí podrás conocer a todos los freelancers que hacen uso de esta plataforma.</p>
            <div onChange={changeForm} onSubmit={buscarPalabra}>
              <form>
                <div className="d-flex mb-3">
                  <div className="form-floating w-100 me-4">
                    <input
                        type="text"
                        className="form-control"
                        id="buscar"
                        name="buscar"
                        placeholder="buscar"
                    />
                    <label htmlFor="buscar">¿No encuentras lo que necesitas? Búscalo aquí directamente</label>
                  </div>
                  <button className="btn2 rounded btn-primary fw-bold mb-2" type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <Table hover>
              <thead>
                <tr className="table-primary welcome">
                  <th></th>
                  <th>Nombre</th>
                  <th>Usuario</th>
                  <th className="text-center">Rating</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {
                  resultado.map((resultado)=>( 
                  <tr>
                    <td>
                      <svg
                          className="bd-placeholder-img rounded-circle" width="90" height="90" role="img">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#eee"></rect>
                        <text x="50%" y="50%" fill="#aaa" dy=".3em">Imagen</text>
                      </svg>
                    </td>
                    <td>
                      {resultado.User.firstName + " " + resultado.User.lastName}
                      </td>
                      <td>
                      {resultado.User.username}
                      </td>
                      <td className="text-center">
                        {freelancerRating(resultado.freelancerRating)}
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
