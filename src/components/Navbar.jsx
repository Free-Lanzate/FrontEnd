import React from 'react'
import "./navbar.scss"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/usuario">usuario</Link>
          <Link to="/freelanzer">freelanzer</Link>
    </nav>
  )
}

export default Navbar