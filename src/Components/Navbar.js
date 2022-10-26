import CartLogo from "./CartWidget";
import './Navbar.css'
const Navbar = () =>{
    return(            
    <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href='link-home' >Frënda clothes</a>
            <ul className="liContainer">
                <li className="navbar-li"><a className="navbar-a" href='link-home'>Inicio</a></li>
                <li className="navbar-li"><a className="navbar-a" href='link-products'> Productos</a></li>
                <li className="navbar-li"><a className="navbar-a" href='link-contact'> Contacto</a></li>
            </ul>
            <CartLogo/>
        </div>
    </nav>
    );
}



export default Navbar
