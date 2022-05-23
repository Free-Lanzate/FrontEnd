import React from 'react'
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {showHide} from "../utils/passwordVisibility"

//TODO: Validar que las contraseñas y coincidan y reemplazar alguien@example.com por el email.

const RestablecerPassword = () => {

    const style = {
        backgroundImage: `url(${Background})`,
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100vw',
        height: '100vh'
    }

    return (
      <div className="forgot text-center d-flex" style={style}>
        <div className="form-signin rounded max-w-forgp my-auto">
            <form>
                <img className="w-25 mb-4 d-flex justify-content-start" src={Logo} alt="Free-Lánzate"/>
                    <h5 className=" welcome mb-3 fw-bold">Restablece la contraseña</h5>
                    <p>Para el usuario<b className="badge">alguien@example.com</b></p>
                    <div className="form-floating w-75 mx-auto mt-4 mb-4">
                        <input
                            type="password"
                            className="form-control mb-3"
                            id="newPassword"
                            name="newPassword"
                            placeholder="newPassword"
                        />
                        <label htmlFor="newPassword">Contraseña nueva</label>
                        <i className="bi bi-eye-slash-fill form-icon" onClick={((e) => showHide(e.target))}> </i>
                    </div>
                    <div className="form-floating w-75 mx-auto">
                        <input
                            type="password"
                            className="form-control mb-3"
                            id="repeatPassword"
                            name="repeatPassword"
                            placeholder="repeatPassword"
                        />
                        <label htmlFor="repeatPassword">Confirma la contraseña</label>
                        <i className="bi bi-eye-slash-fill form-icon" onClick={((e) => showHide(e.target))}> </i>
                    </div>
                    <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mt-3 mb-4" type="submit">
                        Guardar cambios
                    </button>
            </form>
        </div>
      </div>
    )
}

export default RestablecerPassword