import Login from "./views/Login";
import Registro from "./views/Registro";
import RegistroFreelancer from "./views/RegistroFreelancer";
import RecuperarPassword from "./views/RecuperarPassword";
import RestablecerPassword from "./views/RestablecerPassword";
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
        path: '/registro-freelancer',
        component: RegistroFreelancer,
        layout: Visitante,
    },
    {
        path: '/recuperar',
        component: RecuperarPassword,
        layout: Visitante
    },
    {
        path: '/restablecer',
        component: RestablecerPassword,
        layout: Visitante,
    },
    {
        path: '/',
        component: Buscar,
        layout: Visitante,
    }
]

const visitorRoutes = [...routesVisitante]

export default visitorRoutes