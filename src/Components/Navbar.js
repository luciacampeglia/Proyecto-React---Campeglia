import CartLogo from "./CartWidget";
import './Navbar.css'

const Navbar = () =>{
    return(            
    <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href='link-home' >Frënda clothes</a>
          
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Filtrar" aria-label="Search"/>
                <button className="btn btn-outline-light" type="submit">Buscar</button>
            </form>
            {CartLogo}
        </div>
    </nav>
    );
}




export default Navbar