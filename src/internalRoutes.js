import Anuncios from "./views/Anuncios"
import Buscar from "./views/Buscar"
import Carrito from "./views/Carrito"
import Ordenes from "./views/Ordenes"
import Perfil from "./views/Perfil"
import Recomendaciones from "./views/Recomendaciones"
import Login from "./views/Login"
import Registro from "./views/Registro"
import Recuperarcontraseña from "./views/Recuperarcontraseña"

const routesSidebar = [
    {
        path: 'buscar',
        component: Buscar,
    },
    {
        path: 'perfil',
        component: Perfil,
    },
    {
        path: 'ordenes',
        component: Ordenes,
    },
    {
        path: 'recomendaciones',
        component: Recomendaciones,
    },
    {
        path: 'carrito',
        component: Carrito,
    },
    {
        path: 'anuncio',
        component: Anuncios,
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: 'registro',
        component: Registro,
    },
    {
        path: 'recuperar',
        component: Recuperarcontraseña,
    },
    {
        path: '',
        component: Buscar,
    }
]

const internalRoutes = [...routesSidebar]

export default internalRoutes