import products from "../Products/Products"
import './Cards.css'
import ProductsCounter from "../ProductCounter/ProductCounter" 
import DetailCard from "../ProductDetail/ProductDetail"
import { useState } from "react"
import {Link} from "react-router-dom"


export const productsApi = async () => {
  const url = '../Products/Products'
  const resp = await fetch(url);
  const data = await resp.json();

  const productos = data.map((product) =>({
    product: product.produc,
    imgage: product.image,
    price: product.price
  }))
  console.log(productos);
  return productos
}
const Cards = () =>{
  const [filter, setFilter] = useState("");
  return(            
<div className='cards-container'>
  {/* <Link className="productsA" to="link-products"> */}  
{products.filter(f => f.product.includes(filter)).map((product, i) => (
  <div key={i} className='card'>
    <h4>{product.product}</h4>
    <img className='img-product' src={product.image} alt='productos'/>
    <h6 >${product.price}</h6>
    <ProductsCounter/> 
    {/* <DetailCard/> */}
  </div>
))}
{/* </Link> */}
</div>  
  );
}

/* export const FilterInput = () =>{
  const [filter, setFilter] = useState(""); 
  return(
    <div>
      {products.filter(f=>product.includes(filter)).map((product,i) =>(
        <div key={i} className="Filter-input">
          <h4>{product.product}</h4>
      <input id="filter-input" className="form-control me-2" type="text" placeholder="Filtrar" value={filter}
       onChange={(event)=> setFilter (event.target.value)}/>
    </div>
      ))}
    </div>
)} */

export default Cards

/*  export const Card = ({products, image, price}) => {
  return(
    <div className="cards-container">
      <h3>{products}</h3>
      <img alt={`Producto ${products}`} src={image}/>
      <p>{price}</p>
    </div>
  )

} */