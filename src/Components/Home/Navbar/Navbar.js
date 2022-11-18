import CartLogo from "../CartWidget/CartWidget";
import '../Navbar/Navbar.css'
import { useState } from "react";
/* import { FilterInput } from "../Card/Cards"; */
const Navbar = () =>{
    const [filter, setFilter] = useState("");
    return(            
    <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href='link-home' >Frënda clothes</a>
            <ul className="liContainer">
                <li className="navbar-li"><a className="navbar-a" href='link-home'>Inicio</a></li>
                <li className="navbar-li"><a className="navbar-a" href='link-products'> Productos</a></li>
                <li className="navbar-li"><a className="navbar-a" href='link-contact'> Contacto</a></li>
                <form className="formInput d-flex">
                   {/*  {<FilterInput/>} */}
                </form>
            </ul>
            <CartLogo/>
        </div>
    </nav>
    );
}



export default Navbar
