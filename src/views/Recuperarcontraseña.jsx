import React from 'react'

const Recuperarcontraseña = () => {
  return (
    <div>Recuperar contraseña
        <body className="text-center">
            <main className="form-signin rounded max-w-forgp">
                <form action="/sent" method="get">
        <img className="w-25 mb-4 d-flex justify-content-start" src="/images/Logo.png" alt="Free-Lánzate"/>
        <p className="h5 welcome mb-3 fw-bold">¿Olvidaste tu contraseña?</p>
        <div className="form-floating w-75 mx-auto mt-5">
            <input
                    type="email"
                    className="form-control mb-5"
                    id="email"
                    name="email"
                    placeholder="username"
            />
            <label for="email">Correo electrónico</label>
        </div>
        <div>
            <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mb-3 d-flex align-items-center" type="submit">Recuperar ahora <i className="bi bi-envelope-fill button-icon"></i></button>
        </div>
    </form>
</main>
</body>
    </div>
  )
}

export default Recuperarcontraseña