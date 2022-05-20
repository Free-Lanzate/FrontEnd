import React,{useState} from 'react';
import { notification } from "antd";
import { emailValidation, minLengthValidation} from "../utils/formValidation";
import {registro} from "../api";



const Registro = () => {

    const [inputs, setInputs] = useState({
        nombre: "",
        email: "",
        newPassword: "",
        repeatPassword: "",
      });

      const [formValid, setFormValid] = useState({
        email: false,
        newPassword: false,
        repeatPassword: false,
      });

      const changeForm = e => {
          setInputs({
            ...inputs,
            [e.target.name]: e.target.value
          });
      };

      const inputValidation = e => {
        const { type, name } = e.target;
    
        if (type === "email") {
          setFormValid({ ...formValid, [name]: emailValidation(e.target) });
        }
        if (type === "password") {
          setFormValid({ ...formValid, [name]: minLengthValidation(e.target, 6) });
        }
      };

      const register = e => {
        e.preventDefault();
        const emailVal = inputs.email;
        const newPasswordVal = inputs.newPassword;
        const repeatPasswordVal = inputs.repeatPassword;

        if (!emailVal || !newPasswordVal || !repeatPasswordVal) {
        notification["error"]({
            message: "Todos los campos son obligatorios"
        });
        } else {
        if (newPasswordVal !== repeatPasswordVal) {
            notification["error"]({
            message: "Las contraseñas tienen que ser iguales."
            });
        } else {
            const result = registro(inputs)
        };
    }
}

  return (
<div>
    <main className="form-signin rounded max-w-reg" onSubmit={register} onChange={changeForm}>
        <form>
            <img className="mb-4 d-flex justify-content-start" src="/images/Logo.png" alt="Free-Lánzate"/>
            <div className="row g-2">
                <div className="col-md">
                    <p className="h5 welcome mb-3 fw-bold">Crea tu cuenta</p>
                    <p>Por favor, diligencia los siguientes campos</p>
                    <div className="input-group w-75 mx-auto mt-2">
                        <div>
                            <span className="input-group-text bg-gb text-white"><i className="bi bi-person-circle my-1"></i></span>
                        </div>
                        <div className="form-floating flex-grow-1">
                            <input
                                    type="text"
                                    className="form-control mb-3"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="name"
                                    onChange={inputValidation}
                            />
                            <label for="nombre">Nombre completo</label>
                        </div>
                    </div>
                    <div className="input-group w-75 mx-auto">
                        <div>
                            <span className="input-group-text bg-gb text-white"><i className="bi bi-envelope-fill my-1"></i></span>
                        </div>
                        <div className="form-floating flex-grow-1">
                            <input
                                    type="email"
                                    className="form-control mb-3"
                                    id="email"
                                    name="email"
                                    placeholder="username"
                                    onChange={inputValidation}
                            />
                            <label for="email">Correo electrónico</label>
                        </div>
                    </div>
                    <div className="input-group w-75 mx-auto">
                        <div>
                            <span className="input-group-text bg-gb text-white"><i className="bi bi-lock-fill my-1"></i></span>
                        </div>
                        <div className="form-floating flex-grow-1">
                            <input
                                    type="password"
                                    className="form-control mb-3"
                                    id="newPassword"
                                    name="newPassword"
                                    placeholder="newPassword"
                                    onChange={inputValidation}
                            />
                            <label for="newPassword">Contraseña nueva</label>
                            <i className="bi bi-eye-slash-fill form-icon" onclick="ShowHide(this)"></i>
                        </div>
                    </div>
                    <div className="input-group w-75 mx-auto">
                        <div>
                            <span className="input-group-text bg-gb text-white"><i className="bi bi-shield-fill-check my-1"></i></span>
                        </div>
                        <div className="form-floating flex-grow-1">
                            <input
                                    type="password"
                                    className="form-control mb-3"
                                    id="repeatPassword"
                                    name="repeatPassword"
                                    placeholder="repeatPassword"
                                    onChange={inputValidation}
                            />
                            <label for="repeatPassword">Confirma la contraseña</label>
                            <i className="bi bi-eye-slash-fill form-icon" onclick="ShowHide(this)"></i>
                        </div>
                    </div>
                    <div className="h3 mb-3 fw-normal">
                        <p>¿Ya estás registrado?<a href="/login" className="badge mt-2">Inicia sesión</a></p>
                    </div>
                </div>
                <div className="col-md">
                    <p className="h5 welcome mb-3 fw-bold">Información Bancaria</p>
                    <hr className="bg-gb w-75 mx-auto"/>
                    <p className="h5 welcome mb-3 fw-bold">Tarjeta de crédito</p>
                    <div className="form-floating w-75 mx-auto mt-4">
                        <input
                                type="text"
                                className="form-control mb-3"
                                id="nombreTarjeta"
                                name="nombreTarjeta"
                                placeholder="nameCard"
                        />
                        <label for="nombreTarjeta">Nombre que aparece en la tarjeta</label>
                    </div>
                    <div className="form-floating w-75 mx-auto">
                        <input
                                type="number"
                                className="form-control mb-3"
                                id="numCard"
                                name="numCard"
                                placeholder="numCard"
                        />
                        <label for="numCard">Número de la tarjeta</label>
                    </div>
                    <div className="w-75 mx-auto d-flex">
                        <div className="col form-floating">
                            <input
                                    type="date"
                                    className="form-control mb-3"
                                    id="expDate"
                                    name="expDate"
                                    placeholder="expDate"
                            />
                            <label for="expDate">Fecha de expiración</label>
                        </div>
                        <div className="col-4 form-floating ms-3">
                            <input
                                    type="number"
                                    className="form-control"
                                    id="CVV"
                                    name="CVV"
                                    placeholder="numCard"
                            />
                            <label for="CVV">CVV</label>
                        </div>
                    </div>
                    <div className="w-75 mx-auto my-2">
                        <input
                                type="checkbox"
                                className="me-3"
                                id="free"
                                name="free"
                                placeholder="free"
                        />
                        <label for="free"> Deseo registrarme como freelancer</label>
                    </div>
                    <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mt-2 mb-3" type="submit">Continuar</button>
                </div>
            </div>
        </form>
    </main>
</div>
  )
}

export default Registro