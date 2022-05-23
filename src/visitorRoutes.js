import Login from "./views/Login";
import Registro from "./views/Registro";
import Recuperarcontraseña from "./views/Recuperarcontraseña";
import Buscar from "./views/Buscar";
import Visitante from "./layouts/Visitante";

const routesVisitante = [

    {
        path: '/login',
        component: Login,
        layout: Visitante
    },
    {
        path: '/registro',
        component: Registro,
        layout: Visitante
    },
    {
        path: '/recuperar',
        component: Recuperarcontraseña,
        layout: Visitante
    },
    {
        path: '/',
        component: Buscar,
        layout: Visitante,
    }
]

const visitorRoutes = [...routesVisitante]

export default visitorRoutes