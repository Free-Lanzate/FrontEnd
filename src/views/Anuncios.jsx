import React from 'react'

const Anuncios = () => {
  return (
      <div className="contenedorPerfil text-center d-flex">
        <div className="container rounded row">
          <form>
            <div className="row">
              <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <i className="bi bi-camera"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 mb-10">
                <div className="card border-left-success  h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          Nombre del producto o servicio
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-10 mb-4">
                <div className="card border-left-warning  h-80 py-7">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          $ Precio
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="form-floating col-lg-20">
                <input
                    type="text"
                    className="form-control mb-3"
                    id="dir"
                    name="dir"
                    placeholder="dir"
                />
                <label htmlFor="password" className="ms-3">¿En qué consiste el producto o servicio que deseas ofrecer?</label>
              </div>
            </div>
            <div className="col">
              <button className="w-70 btn btn-lg btn-primary fw-bold" type="submit">Publicar</button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Anuncios