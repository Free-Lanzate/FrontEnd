import { React, useState } from "react"
import QuienesSomos from "./info/QuienesSomos"
import Legal from "./info/Legal"

const ExtraInfo = () => {
    const[activo, setActivo] = useState("QuienesSomos")

    const selection = () => {
      if(activo === 'QuienesSomos'){
          return (<QuienesSomos/>)
      }
      else if(activo === 'Legal') {
          return (<Legal/>)
      }
  }

  return (
    <div className="contenedorPerfil text-center d-flex">
        <div className="container rounded row w-100">
          <h5 className=" welcome mb-3 fw-bold">¿Quieres saber más acerca de Free-Lánzate?</h5>
          <nav className="text-center mb-4 fw-bold w-100 d-flex">
              <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("QuienesSomos")}>Quienes somos</button>
              <button className="btn2 rounded btn-primary fw-bold mx-auto" onClick={()=>setActivo("Legal")}>Aviso legal</button>
            </nav>
            {selection()}
        </div>
      </div>
  )
}

export default ExtraInfo