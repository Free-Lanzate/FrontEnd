import { React, useState } from "react"
import  {Categorias}  from "../components/Categorias"
import {Freelancer} from "../components/Freelancer"
import { Anuncios } from "../components/Anuncios"

const Buscar = () => {

  const[activo, setActivo] = useState("Categorias")

  if(activo === 'Categorias'){
    return (
      <div className='buscar' >
        <nav className="top">
          <button onClick={()=>setActivo("Categorias")}>Categorias</button>
          <button onClick={()=>setActivo("Freelancer")}>Freelancer</button>
          <button onClick={()=>setActivo("Anuncios")}>Anuncios</button>
        </nav>
        <Categorias/>
      </div>
      )
  }
  if(activo === 'Freelancer'){
    return (
      <div className='buscar' >
        <nav className="top">
          <button onClick={()=>setActivo("Categorias")}>Categorias</button>
          <button onClick={()=>setActivo("Freelancer")}>Freelancer</button>
          <button onClick={()=>setActivo("Anuncios")}>Anuncios</button>
        </nav>
        <Freelancer/>
      </div>
      )
  }
  if(activo === 'Anuncios'){
    return (
      <div className='buscar' >
        <nav className="top">
    <button onClick={()=>setActivo("Categorias")}>Categorias</button>
    <button onClick={()=>setActivo("Freelancer")}>Freelancer</button>
    <button onClick={()=>setActivo("Anuncios")}>Anuncios</button>
    </nav>
        <Anuncios/>
      </div>

      )
  }

return(
  <div></div>
)
}

export default Buscar