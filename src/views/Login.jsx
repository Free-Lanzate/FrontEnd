import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {iniciar_sesion} from "../api"
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {showHide} from "../utils/passwordVisibility"

function Login (){

    const style = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh'
    }

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const changeForm = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const login = e =>{
    e.preventDefault();
    const result = iniciar_sesion(inputs);
  }

  return (
    <div className="login text-center d-flex" style={style}>
      <div className="form-signin rounded max-w-log my-auto" onChange={changeForm} onSubmit={login}>
            <form>
                <img className="w-50 mb-4 mt-2" src={Logo} alt="Free-Lánzate" />
                <h5 className=" welcome mb-3 fw-bold">¡Te damos la bienvenida!</h5>
                <div className="form-floating w-75 mx-auto mt-4">
                    <input
                            type="email"
                            className="form-control mb-3"
                            id="email"
                            name="email"
                            placeholder="username"
                    />
                    <label htmlFor="email">Correo electrónico</label>
                </div>
                <div className="form-floating w-75 mx-auto">
                    <input
                            type="password"
                            className="form-control mb-3"
                            id="password"
                            name="password"
                            placeholder="Password"
                    />
                    <label htmlFor="password">Contraseña</label>
                    <i className="bi bi-eye-slash-fill form-icon" onClick={((e) => showHide(e.target))}> </i>
                </div>
                <div className="h3 mb-3 fw-normal">
                    <Link to = "/recuperar" className="badge mt-2 mb-2">¿Olvidaste tu contraseña?</Link>
                </div>
                <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Ingresar</button>
            </form>

            <div className="h3 mb-3 fw-normal">
                <p>¿No tienes cuenta?<a href="/registro" className="badge mt-4">Regístrate</a></p>
            </div>
        </div>
    </div>
  )
}

export default Login