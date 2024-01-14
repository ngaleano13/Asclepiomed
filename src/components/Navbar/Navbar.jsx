import { Link, NavLink } from "react-router-dom";
import '../Navbar/navbar.css'

export const Navbar = () =>
<nav className="navbar navbar-dark navbar-expand-lg navbar-fixed-top custom-blue">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3 ms-4" href="#">ASCLEPIO<span className="custom-green">MED</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
      <ul className="navbar-nav gap-2 lg-fs">
        <li className="nav-item">
          <NavLink to='/' className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/hospitals' className="nav-link">Hospitales</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/maps' className="nav-link">Mapa</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/forms' className="nav-link">Turnos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/contact' className="nav-link">Contactos</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>