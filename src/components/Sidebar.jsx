import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to = "/">
            <span className='logo'>FreeLanzate</span>
            </Link>
        </div>
        <div className="center">
            <ul>
                <li>
                    <Link to = "buscar">
                    <span>
                        Buscar
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to = "perfil">
                    <span>
                        Mi perfil
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to = "ordenes">
                    <span>
                        Mis ordenes
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to = "recomendaciones">
                    <span>
                        Recomendados
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to = "carrito">
                    <span>
                        Mi carrito
                    </span>
                    </Link>
                </li>
                <li>
                    <Link to = "anuncios">
                    <span>
                        Anunciarme
                    </span>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <ul>
                <li>
                    Salir
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar