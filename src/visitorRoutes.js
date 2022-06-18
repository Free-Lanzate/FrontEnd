import Login from "./views/Login";
import Registro from "./views/Registro";
import RegistroFreelancer from "./views/RegistroFreelancer";
import RecuperarPassword from "./views/RecuperarPassword";
import RestablecerPassword from "./views/RestablecerPassword";
import Buscar from "./views/Buscar";
import Visitante from "./layouts/Visitante";
import Categoria from "./components/buscar/Categoria"

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
        path: '/clave/:action',
        component: RecuperarPassword,
        layout: Visitante
    },
    {
        path: '/restablecer/:id/:token',
        component: RestablecerPassword,
        layout: Visitante,
    },
    {
        path: '/',
        component: Buscar,
        layout: Visitante,
    },
    {
        path: '/buscarcategoria',
        component: Categoria
    }
]

const visitorRoutes = [...routesVisitante]

export default visitorRoutes