import "../Card/Cards.css"
import DetailCard from "../ProductDetail/ProductDetail";
import { CartContext } from "../../../Context/CartContext";
import { useContext } from "react";
import {Link} from "react-router-dom"
import ProductsCounter from "../ProductCounter/ProductCounter";
import products from "../Products/Products";
const Card = ({ product, id }) => {

    const {cart} = useContext (CartContext);
    const {addToCart} = useContext (CartContext);

 
    return (
        <div className='cards-container'>
            
            <div className="card">
            <h4 className="info-product">{product.product}</h4>
            <img className="img-product" alt="imagen-producto" src={product.image}/>
            <p className="info-product">${product.price}</p>
            <button onClick={DetailCard}>
                Detalle</button>
            {<button onClick={() => addToCart ({id:1, price:1000})}>Agregar al carrito</button>}
            </div>
            
        </div>
    );
};
 export default Card