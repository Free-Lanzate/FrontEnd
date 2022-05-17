import Anuncios from "./views/Anuncios"
import Buscar from "./views/Buscar"
import Carrito from "./views/Carrito"
import Ordenes from "./views/Ordenes"
import Perfil from "./views/Perfil"
import Recomendaciones from "./views/Recomendaciones"
import Login from "./views/Login"

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
    }
]

const internalRoutes = [...routesSidebar]

export default internalRoutes