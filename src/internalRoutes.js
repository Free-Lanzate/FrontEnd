import Anuncios from "./views/Anuncios"
import Buscar from "./views/Buscar"
import Categoria from "./views/buscar/Categoria"
import Carrito from "./views/Carrito"
import Ordenes from "./views/Ordenes"
import Perfil from "./views/Perfil"
import Recomendaciones from "./views/Recomendaciones"

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
        path: 'buscarcategoria',
        component: Categoria
    },
    {
        path: '',
        component: Perfil,
    }
]
    


const internalRoutes = [...routesSidebar]

export default internalRoutes