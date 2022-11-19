import { useEffect, useState } from "react"
import {getData} from '../Products/Products'
import Card from './Card'
import './Cards.css'
import React from 'react'
import {useParams} from "react-router-dom"

import ProductsCounter from "../ProductCounter/ProductCounter" 
import DetailCard from "../ProductDetail/ProductDetail"
import {Link} from "react-router-dom"
import { CartProvider } from "../../../Context/CartContext"



const Cards = () =>{
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([])
  const {gender} = useParams();
  console.log(products)
  
  getData()
  .then((prod) => {
    setProducts(prod)
    console.log(prod);
  })
  .catch((err) => {
      console.log(err.message);
  });

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
          <CartProvider>
        {gender
          ?products
            .filter((product) => product.product.includes(filter)) 
            .filter((product) => product.gender === gender)
            .map((product, i) => (
            <Card 
            id= {i}
            key={i} 
            product={product}
            gender={product.gender} />
        ))
          :products
          .filter((product) => product.product.includes(filter)) 
          .map((product, i) => (
          <Card 
          id= {i}
          key={i} 
          product={product}
          gender={product.gender} />
      ))}
        </CartProvider>
        </div>
    </div>
    );
  };

  export default Cards;





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



/*  export const Card = ({products, image, price}) => {
  return(
    <div className="cards-container">
      <h3>{products}</h3>
      <img alt={`Producto ${products}`} src={image}/>
      <p>{price}</p>
    </div>
  )

} */