import React,{useState} from 'react';
import { notification } from "antd";
import { emailValidation, minLengthValidation} from "../utils/formValidation";
import {registro} from "../api/user";



const Registro = () => {

    const [inputs, setInputs] = useState({
        username: "",
        firstName: "Juan",
        lastName: "Bustamante",
        password: "",
        email: "",
        location: "",
        avatarUrl: "",
        isisFreelancer: false
      });

      const [formValid, setFormValid] = useState({
        email: false,
        password: false,
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

    const register = async e => {
        e.preventDefault();
        const emailVal = inputs.email;
        const passwordVal = inputs.password;
        const repeatPasswordVal = inputs.repeatPassword;

        if (!emailVal || !passwordVal || !repeatPasswordVal) {
        notification["error"]({
            message: "Todos los campos son obligatorios"
        });
        } else {
            if (passwordVal !== repeatPasswordVal) {
                notification["error"]({
                message: "Las contraseñas tienen que ser iguales."
                });
            } else {
                const result = await registro(inputs);
                if (!result.ok) {
                    notification["error"]({
                    message: result.message
                    });
                } else {
                    notification["success"]({
                    message: result.message
                    });
                    resetForm();
                    window.location.href = "login";
                }
            };
        }
    }

    const resetForm = () => {
        const inputs = document.getElementsByTagName("input");
    
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].classList.remove("success");
          inputs[i].classList.remove("error");
        }
    
        setInputs({
            username: "",
            firstName: "Juan",
            lastName: "Bustamante",
            password: "",
            email: "",
            location: "",
            avatarUrl: ""
        });
    
        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
        });
      };

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
                                    id="username"
                                    name="username"
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
                                    id="password"
                                    name="password"
                                    placeholder="Password"
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
                    <button className="w-75 btn btn-lg btn-primary fw-bold mx-auto mt-2 mb-3" type="submit">Continuar</button>
                </div>
            </div>
        </form>
    </main>
</div>
  )
}

export default Registro