import {React, useState, useEffect} from 'react'
import { buscarFreelancer } from '../api/buscar';
import Table from 'react-bootstrap/Table';
import ModalFreelancer from './ModalFreelancer';
import BusquedaFreelancer from './buscar/BusquedaFreelancer';

export const Freelancer = () => {
  const[freelancer, setFreelancer] = useState([])

  useEffect(() => {
    buscarFreelancer().then(response => {
      setFreelancer(response);
    })
  }, [])

return(
  <div>
    <BusquedaFreelancer freelancer={freelancer}/>
  </div>
  )
}
