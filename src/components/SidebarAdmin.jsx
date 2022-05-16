import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'


function SidebarAdmin ()  {

const {Sider} =Layout;
    
  return (
    <Sider className='sidebar'>
        <div className="top">
            <Link to = "/">
            <span className='logo'>FreeLanzate</span>
            </Link>
        </div>
        <div className="center">

            <Menu theme='dark' mode='inline' defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                    <Link to = "/freelanzer/buscar">
                    <span>
                        Buscar
                    </span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to = "/freelanzer/perfil">
                    <span>
                        Mi perfil
                    </span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to = "/freelanzer/ordenes">
                    <span>
                        Mis ordenes
                    </span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to = "/freelanzer/recomendaciones">
                    <span>
                        Recomendados
                    </span>
                    </Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to = "/freelanzer/carrito">
                    <span>
                        Mi carrito
                    </span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to = "/freelanzer/anuncio">
                    <span>
                        Anunciarme
                    </span>
                    </Link>
                </Menu.Item>
            </Menu>

            
        </div>
        <div className="bottom">
            <ul>
                <li>
                    Salir
                </li>
            </ul>
        </div>
    </Sider>
  )
}

export default SidebarAdmin