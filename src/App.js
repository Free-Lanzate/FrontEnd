
//import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
/*import Login from "./views/login/Login";
import Buscar from "./views/buscar/Buscar";
import Anuncios from "./views/anuncios/Anuncios";
import Carrito from "./views/carrito/Carrito";
import Ordenes from "./views/ordenes/Ordenes";
import Perfil from "./views/perfil/Perfil";
import Recomendaciones from "./views/recomendaciones/Recomendaciones";*/
import Usuario from "./layouts/Usuario";
import Visitante from "./layouts/Visitante";
import Freelanzer from "./layouts/Freelanzer";
import { Link } from "react-router-dom";
import Home from "./layouts/Home";
import Login from "./views/Login"
import Recuperarcontraseña from "./views/Recuperarcontraseña";
import Registro from "./views/Registro";
//import { Navbar } from "react-bootstrap";


/*<Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
          ></Route>
          <Route path="login" element={<Login />} />
            */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
          <Link to="/"> Home </Link>
          <Link to="/visitante"> visitante </Link>
          <Link to="/usuario"> usuario </Link>
          <Link to="/freelanzer"> freelanzer </Link>
      </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="visitante/*" element={<Visitante />}/>
          <Route path="usuario/*" element={<Usuario />}/>
          <Route path="freelanzer/*" element={<Freelanzer />}/>
          <Route path="login" element={<Login />}/>
          <Route path="recuperar" element={<Recuperarcontraseña />}/>
          <Route path="registro" element={<Registro />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
