import Freelanzer from "./layouts/Freelanzer"
import Usuario from "./layouts/Usuario"
import Visitante from "./layouts/Visitante"
//import Login from "./views/Login"

const routesUsuario = [
    
    {
        path: "/usuario",
        layout: Usuario,
    }
]

const routesFreelanzer = [
    
    {
        path: "/freelanzer",
        layout: Freelanzer,
    }
]

const routesVisitante = [
    
    {
        path: "/",
        layout: Visitante,
    }
]

const routes = [...routesFreelanzer, ...routesUsuario, ...routesVisitante]

export default routes