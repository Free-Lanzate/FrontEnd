import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu, Button } from 'antd'
import { logout } from "../api/auth"


function Sidebar ()  {

    const logoutUser = () => {
        logout();
        window.location.reload();
      };
    

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
                    <Link to = "../buscar">
                    <span>
                        Buscar
                    </span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to = "../perfil">
                    <span>
                        Mi perfil
                    </span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to = "../ordenes">
                    <span>
                        Mis ordenes
                    </span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to = "../recomendaciones">
                    <span>
                        Recomendados
                    </span>
                    </Link>
                </Menu.Item>

                <Menu.Item>
                    <Link to = "../carrito">
                    <span>
                        Mi carrito
                    </span>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to = "../anuncio">
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

                    <Button type="link" onClick={logoutUser}>Salir </Button>
                </li>
            </ul>
        </div>
    </Sider>
  )
}

export default Sidebar