import {Link} from "react-router-dom"

const CartLogo = () =>{
    return(            
    <Link to={`toCart`}>
    <img id="logoCart" src="../imagenes/shoppingCart.png" alt="logo-carrito" href="toCart"/></Link> 
    );
}


export default CartLogo