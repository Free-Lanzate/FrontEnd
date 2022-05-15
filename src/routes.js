import Freelanzer from "./layouts/Freelanzer"
import Usuario from "./layouts/Usuario"
import Visitante from "./layouts/Visitante"

import Anuncios from "./views/Anuncios"
import Buscar from "./views/Buscar"
import Carrito from "./views/Carrito"
import Ordenes from "./views/Ordenes"
import Perfil from "./views/Perfil"
import Recomendaciones from "./views/Recomendaciones"
import Login from "./views/Login"

const routesUsuario = [
    
    {
        path: "/usuario",
        layout: Usuario,
        component: Buscar
    },
    {
        path: '/usuario/',
        component: Buscar,
        layout: Usuario,
    },
    {
        path: '/usuario/',
        component: Perfil,
        layout: Usuario,
    },
    {
        path: '/usuario/',
        component: Ordenes,
        layout: Usuario,
    },
    {
        path: '/usuario/',
        component: Recomendaciones,
        layout: Usuario,
    },
    {
        path: '/usuario/',
        component: Carrito,
        layout: Usuario,
    },
    {
        path: '/usuario/',
        component: Anuncios,
        layout: Usuario,
    },
]

const routesFreelanzer = [
    
    {
        path: "/freelanzer",
        layout: Freelanzer,
        component: Freelanzer
    },
    {
        path: '/freelanzer/buscar',
        component: Buscar,
        layout: Freelanzer,
    },
    {
        path: '/freelanzer/perfil',
        component: Perfil,
        layout: Freelanzer,
    },
    {
        path: '/freelanzer/ordenes',
        component: Ordenes,
        layout: Freelanzer,
    },
    {
        path: '/freelanzer/recomendaciones',
        component: Recomendaciones,
        layout: Freelanzer,
    },
    {
        path: '/freelanzer/carrito',
        component: Carrito,
        layout: Freelanzer,
    },
    {
        path: '/freelanzer/anuncios',
        component: Anuncios,
        layout: Freelanzer,
    },
]

const routesVisitante = [
    /*
    {
        path: "/",
        layout: Visitante,
        component: Buscar
    },
    {
        path: '/login',
        component: Login,
        layout: Visitante,
    },
    */
]

const routes = [...routesVisitante,...routesFreelanzer, ...routesUsuario]

export default routes