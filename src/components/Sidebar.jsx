import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'


function Sidebar (props)  {

    const {Sider} = Layout;
    const rol = props.rol;

    let defaultKeys;
    if (rol === "/") defaultKeys = "1";
    else defaultKeys = "2";

    function anuncio(rol) {
        if (rol==="/freelanzer") return(
        <Menu.Item key="6">
            <Link to="../anuncio">
                <span>
                    Anunciarme
                </span>
            </Link>
        </Menu.Item>)
        else return null
    }

    function buildMenu(rol) {
        if (rol==="/") return(
            <Menu theme='dark' mode='inline' defaultSelectedKeys={[defaultKeys]}>
                <Menu.Item key="1">
                    <Link to="../buscar">
                        <span>
                            Buscar
                        </span>
                    </Link>
                </Menu.Item>
                <div>
                    <p>
                        ¿Deseas dar a conocer tu negocio, contactar con otros emprendedores,
                        adquirir sus productos o servicios, reseñarlos, consultar tu historial
                        de compras y, además, recibir recomendaciones?

                        ¡Únete ahora!
                    </p>
                </div>
            </Menu>
        )
        else return(
            <Menu theme='dark' mode='inline' defaultSelectedKeys={[defaultKeys]}>
                <Menu.Item key="1">
                    <Link to="../buscar">
                        <span>
                            Buscar
                        </span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="../perfil">
                        <span>
                            Mi perfil
                        </span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="../ordenes">
                        <span>
                            Mis órdenes
                        </span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="../recomendaciones">
                        <span>
                            Recomendados
                        </span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <Link to="../carrito">
                        <span>
                            Mi carrito
                        </span>
                    </Link>
                </Menu.Item>
                {anuncio(rol)}
            </Menu>
        )}

    function buildBottom(rol) {
        if (rol==="/") return(
            <ul>
                <li>
                    Iniciar Sesión
                </li>
                <li>
                    Registrarse
                </li>
            </ul>
        )
        else return(
            <ul>
                <li>
                    Salir
                </li>
            </ul>
        )
    }

        return (
            <Sider className='sidebar'>
                <div className="top">
                    <Link to={rol}>
                        <span className='logo'>FreeLanzate</span>
                    </Link>
                </div>
                <div className="center">
                    {buildMenu(rol)}
                </div>
                <div className="bottom">
                    {buildBottom(rol)}
                </div>
            </Sider>
        )
}

export default Sidebar