import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {iniciar_sesion} from "../api/user"
import {TOKEN} from "../utils/tokens"
import {notification} from "antd"
import Logo from "../assets/images/Logo.png"
import Background from "../assets/images/fondo.png"
import {showHide} from "../utils/passwordVisibility"
import jwtDecode from 'jwt-decode'

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

  const login = async e =>{
    e.preventDefault();
    const result = await iniciar_sesion(inputs);

    if(result === 'Nombre de usuario incorrecto') {
      notification["error"]({
        message: result
      });
    }
    else if(result ==='La contraseña es incorrecta'){
      notification["error"]({
        message: result
      });
    }
    else if(result ==='Por favor ingrese todos los campos'){
      notification["error"]({
        message: result
      });
    }
    else{
      const free = jwtDecode(result)
      localStorage.setItem(TOKEN, result);
      notification["success"]({
        message: "Login correcto."
        });
        if(free.sub.isFreelancer){
          window.location.href = "freelanzer";
        }else{
          window.location.href = "usuario";
        }
    }
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
                    <Link to = "/clave/recuperar" className="badge mt-2 mb-2">¿Olvidaste tu contraseña?</Link>
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