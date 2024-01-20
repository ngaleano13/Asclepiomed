import { Link, NavLink } from "react-router-dom";
import '../Navbar/navbar.css';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { UsuarioContext } from '../../App';



export const Navbar = () => {
  const [logged, setLogged] = useContext(UsuarioContext);
  const [name, setName] = useContext(UsuarioContext);


  const [t, i18n] = useTranslation("global");
  return (
    <nav className="navbar fixed-top navbar-dark navbar-expand-lg custom-blue">
      <div className="container-fluid">
        <Link className="navbar-brand fs-3 ms-4" href="#">ASCLEPIO<span className="spantitle">MED</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-lg-end" id="navbarNav">
          <ul className="navbar-nav gap-2 lg-fs">
            <li className="nav-item">
              <NavLink to='/' className="nav-link">{t("navbar.home")}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/hospitals' className="nav-link">{t("navbar.hospitals")}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/maps' className="nav-link">{t("navbar.searches")}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/forms' className="nav-link">{t("navbar.shifts")}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/contact' className="nav-link">{t("navbar.contact")}</NavLink>
            </li>
            {logged? <NavbarLogged usuario={name}></NavbarLogged> : <NavbarNotLogged></NavbarNotLogged>}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t("navbar.language")}
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" onClick={() => i18n.changeLanguage("es")}>Español</a></li>
                <li><a className="dropdown-item" onClick={() => i18n.changeLanguage("en")}>Ingles</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


const NavbarNotLogged = () => {
  const[t] = useTranslation("global");
  return(
  <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  {t("navbar.account")}
  </a>
  <ul className="dropdown-menu">
    <li>
      <NavLink to='/login' className="dropdown-item">{t("navbar.login")}</NavLink>
    </li>
    <li>
      <NavLink to='/register' className="dropdown-item">{t("navbar.register")}</NavLink>
    </li>
  </ul>
</li>
)}

const NavbarLogged = ({usuario}) => {
  const[t] = useTranslation("global");
  return(
  <li className="nav-item dropdown">
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    {t("navbar.user-text")} {usuario}
  </a>
  <ul className="dropdown-menu">
    <li>
      <a href="/home" className="dropdown-item">{t("navbar.logout")}</a>
    </li>
  </ul>
</li>
)}