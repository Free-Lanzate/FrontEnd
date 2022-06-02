import {React, useState, useEffect} from 'react'
import { buscarFreelancer } from '../api/buscar';
import Table from 'react-bootstrap/Table';



export const Freelacer = () => {
  const[freelancer, setFreelancer] = useState([])

  useEffect(() => {
    buscarFreelancer().then(response => {
      setFreelancer(response);
    })
  }, [])


  const tableRows=freelancer.map((freelancer)=>{
    return( 
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
          <button onClick={() => console.log("algo va a pasar...")}>saber más...</button>
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
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Rating</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
    </Table>      
      
  </div>
  )
}



/*
*/