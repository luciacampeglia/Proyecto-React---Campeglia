import products, { getData } from "../Products/Products"
import './Cards.css'
import ProductsCounter from "../ProductCounter/ProductCounter" 
import DetailCard from "../ProductDetail/ProductDetail"
import { useState, useEffect } from "react"
import {Link} from "react-router-dom"



const Cards = () =>{
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([])

  const getImages = async () => {
    const products = await getData();
    setProducts(products)
  };
  useEffect(()=>{
    getImages();
  }, []);

  return(
    <div className="principalContainer">
    <div className="filterInput">
      <input 
      id="filter-input" 
      className="form-control me-2" 
      type="text" 
      placeholder="Filtrar" 
      value={filter}
      onChange={(event)=> setFilter (event.target.value)}/>
    </div>
    <div className="cards-container">
      {products
        .filter((product) => product.product.includes(filter))
        .map((product,i) => (
          <Cards
          key={i}
          product= {product.product}
          image = {product.image}
          price = {product.price}
          />
        ))}

    </div>
    </div>
  )

  }





  /* return(            
<div className='cards-container'> */
  {/* <Link className="productsA" to="link-products"> */}  
/* {products.filter(f => f.product.includes(filter)).map((product, i) => (
  <div key={i} className='card'>
    <h4 className="info-product">{product.product}</h4>
    <img className='img-product' src={product.image} alt='productos'/>
    <h6 className="info-product">${product.price}</h6>
    <ProductsCounter/>  */
    {/* <DetailCard/> */}
 /*  </div>
))} */
{/* </Link> */}
/* </div>  
  );
}
 */
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