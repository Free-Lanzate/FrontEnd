import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <main className="form-signin rounded max-w-log">
    <form action="/welcome" method="get">
        <img className="w-50 mb-4 mt-2" src="/images/Logo.png" alt="Free-Lánzate" />
        <p className="h5 welcome mb-3 fw-bold">¡Te damos la bienvenida!</p>
        <div className="form-floating w-75 mx-auto mt-4">
            <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    name="email"
                    placeholder="username"
            />
            <label for="email">Correo electrónico</label>
        </div>
        <div className="form-floating w-75 mx-auto">
            <input
                    type="password"
                    className="form-control mb-3"
                    id="password"
                    name="password"
                    placeholder="Password"
            />
            <label for="password">Contraseña</label>
            <i className="bi bi-eye-slash-fill form-icon" onclick="ShowHide(this)"></i>
        </div>
        <div className="h3 mb-3 fw-normal">
            <Link to = "/recuperar" className="badge mt-2 mb-2">¿Olvidaste tu contraseña?</Link>
        </div>
        <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto" type="submit">Ingresar</button>
    </form>

    <div className="h3 mb-3 fw-normal">
        <p>¿No tienes cuenta?<a href="/registro" className="badge mt-4">Regístrate</a></p>
    </div>
</main>
    </div>
  )
}

export default Login