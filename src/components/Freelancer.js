import {React, useState, useEffect} from 'react'
import { buscarFreelancer } from '../api/buscar';
import Table from 'react-bootstrap/Table';
import ModalFreelancer from './ModalFreelancer';

export const Freelancer = () => {
  const[freelancer, setFreelancer] = useState([])

  useEffect(() => {
    buscarFreelancer().then(response => {
      setFreelancer(response);
    })
  }, [])

return(
  <div>
    
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
            freelancer.map((freelancer)=>( 
              <tr>
              <td>
                {freelancer.firstName + " " + freelancer.lastName }
                </td>
                <td>
                {freelancer.username}
                </td>
                <td>
                {freelancer.freelancerRating}
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
  )
}
