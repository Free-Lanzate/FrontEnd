import React from 'react'
import { Routes, Route, Link, } from 'react-router-dom'
import Login from "../views/Login"
import Recuperarcontraseña from '../views/Recuperarcontraseña'
import Registro from '../views/Registro'

const Visitante = () => {
  return (
    <div>Visitante

    <Link to="registro"> registro </Link>
    <Link to="/login">Login</Link>
    <Link to="/recuperar"> recuperar </Link>

    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='registro' element={<Registro />} />
        <Route path='/recuperar' element={<Recuperarcontraseña />} />
        
    </Routes>
    
    </div>

    
  )
}

export default Visitante