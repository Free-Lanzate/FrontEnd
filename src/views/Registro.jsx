import React from 'react'

const Registro = () => {
  return (
    <div
    >Registro

<body class="text-center">
<main class="form-signin rounded max-w-reg">
    <form action="/register/freelancer" method="get" oninput='validatePassword()'>
        <img class="mb-4 d-flex justify-content-start" src="/images/Logo.png" alt="Free-Lánzate"/>
        <div class="row g-2">
            <div class="col-md">
                <p class="h5 welcome mb-3 fw-bold">Crea tu cuenta</p>
                <p>Por favor, diligencia los siguientes campos</p>
                <div class="input-group w-75 mx-auto mt-2">
                    <div>
                        <span class="input-group-text bg-gb text-white"><i class="bi bi-person-circle my-1"></i></span>
                    </div>
                    <div class="form-floating flex-grow-1">
                        <input
                                type="text"
                                class="form-control mb-3"
                                id="nombre"
                                name="nombre"
                                placeholder="name"
                        />
                        <label for="nombre">Nombre completo</label>
                    </div>
                </div>
                <div class="input-group w-75 mx-auto">
                    <div>
                        <span class="input-group-text bg-gb text-white"><i class="bi bi-envelope-fill my-1"></i></span>
                    </div>
                    <div class="form-floating flex-grow-1">
                        <input
                                type="email"
                                class="form-control mb-3"
                                id="email"
                                name="email"
                                placeholder="username"
                        />
                        <label for="email">Correo electrónico</label>
                    </div>
                </div>
                <div class="input-group w-75 mx-auto">
                    <div>
                        <span class="input-group-text bg-gb text-white"><i class="bi bi-lock-fill my-1"></i></span>
                    </div>
                    <div class="form-floating flex-grow-1">
                        <input
                                type="password"
                                class="form-control mb-3"
                                id="newPassword"
                                name="newPassword"
                                placeholder="newPassword"
                        />
                        <label for="newPassword">Contraseña nueva</label>
                        <i class="bi bi-eye-slash-fill form-icon" onclick="ShowHide(this)"></i>
                    </div>
                </div>
                <div class="input-group w-75 mx-auto">
                    <div>
                        <span class="input-group-text bg-gb text-white"><i class="bi bi-shield-fill-check my-1"></i></span>
                    </div>
                    <div class="form-floating flex-grow-1">
                        <input
                                type="password"
                                class="form-control mb-3"
                                id="repeatPassword"
                                name="repeatPassword"
                                placeholder="repeatPassword"
                        />
                        <label for="repeatPassword">Confirma la contraseña</label>
                        <i class="bi bi-eye-slash-fill form-icon" onclick="ShowHide(this)"></i>
                    </div>
                </div>
                <div class="h3 mb-3 fw-normal">
                    <p>¿Ya estás registrado?<a href="/login" class="badge mt-2">Inicia sesión</a></p>
                </div>
            </div>
            <div class="col-md">
                <p class="h5 welcome mb-3 fw-bold">Información Bancaria</p>
                <hr class="bg-gb w-75 mx-auto"/>
                <p class="h5 welcome mb-3 fw-bold">Tarjeta de crédito</p>
                <div class="form-floating w-75 mx-auto mt-4">
                    <input
                            type="text"
                            class="form-control mb-3"
                            id="nombreTarjeta"
                            name="nombreTarjeta"
                            placeholder="nameCard"
                    />
                    <label for="nombreTarjeta">Nombre que aparece en la tarjeta</label>
                </div>
                <div class="form-floating w-75 mx-auto">
                    <input
                            type="number"
                            class="form-control mb-3"
                            id="numCard"
                            name="numCard"
                            placeholder="numCard"
                    />
                    <label for="numCard">Número de la tarjeta</label>
                </div>
                <div class="w-75 mx-auto d-flex">
                    <div class="col form-floating">
                        <input
                                type="date"
                                class="form-control mb-3"
                                id="expDate"
                                name="expDate"
                                placeholder="expDate"
                        />
                        <label for="expDate">Fecha de expiración</label>
                    </div>
                    <div class="col-4 form-floating ms-3">
                        <input
                                type="number"
                                class="form-control"
                                id="CVV"
                                name="CVV"
                                placeholder="numCard"
                        />
                        <label for="CVV">CVV</label>
                    </div>
                </div>
                <div class="w-75 mx-auto my-2">
                    <input
                            type="checkbox"
                            class="me-3"
                            id="free"
                            name="free"
                            placeholder="free"
                    />
                    <label for="free"> Deseo registrarme como freelancer</label>
                </div>
                <button class="w-75 btn btn-lg btn-primary fw-bold mx-auto mt-2 mb-3" type="submit">Continuar</button>
            </div>
        </div>
    </form>
</main>
</body>

    </div>
  )
}

export default Registro