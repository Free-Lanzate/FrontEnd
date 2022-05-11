import React from 'react'
import Sidebar from "../components/Sidebar"
import Buscar from "../views/Buscar"
import Perfil from "../views/Perfil"
import Ordenes from "../views/Ordenes"
import Recomendaciones from "../views/Recomendaciones"
import Carrito from "../views/Carrito"
import Anuncios from "../views/Anuncios"
import "./usuario.scss"

import { Route, Routes } from 'react-router-dom'

const freelanzer = () => {
  return (
    <div className='usuario'>

        <div className='sidebar'>
        <Sidebar />
        </div>
        
        <div className='contenedor'>
        <Routes>
            <Route path='buscar' element={<Buscar />} />
            <Route path='perfil' element={<Perfil />} />
            <Route path='ordenes' element={<Ordenes />} />
            <Route path='recomendaciones' element={<Recomendaciones />} />
            <Route path='carrito' element={<Carrito />} />
            <Route path='anuncios' element={<Anuncios />} />
        </Routes>
        </div>
        
    </div>
  )
}

export default freelanzer