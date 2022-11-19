import CartLogo from "../CartWidget/CartWidget";
import '../Navbar/Navbar.css'
import { useState } from "react";
import {Link} from "react-router-dom"

const Navbar = () =>{
    const [filter, setFilter] = useState("");
    return(            
    <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
            <Link to={`link-home`} id="Frenda" className="navbar-brand links" href='link-home'>Frënda clothes</Link>
            <ul className="liContainer">
                <li className="navbar-li"><Link to={`link-home`} className="navbar-a" href='link-home'>Inicio</Link></li>
                <li className="nav-item dropdown">
                <Link to={`/link-products`} className="nav-link dropdown-toggle navbar-a" href="link-products" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Productos
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link to={`link-products/Hombre`} className="dropdown-item links" href="link-products/Hombre">Hombre</Link></li>
                    <li><Link to={`link-products/Mujer`} className="dropdown-item links" href="link-products/Mujer">Mujer</Link></li>
                    <li><Link to={`link-products`} className="dropdown-item links" href="link-products">Todo</Link></li>
                </ul>
                </li>
                <li className="navbar-li"><Link to={`link-contact`} className="navbar-a links" href='link-contact'> Contacto</Link></li>
                <form className="formInput d-flex">
                </form>
            </ul>
            <CartLogo/>
        </div>
    </nav>
    );
}



export default Navbar
