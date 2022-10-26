import './App.css';
import Navbar from './Components/Navbar';
import products from './Components/Products';
import {useState} from "react"
import ProductsCounter from './Components/ProductCounter';
import DetailCard from './Components/ProductDetail'


function App() {

  const [filter, setFilter] = useState("");
  
  return (
    <div className="App">
      <div className='Navbar'>
        <Navbar/> 
        <form className="formInput d-flex">
          <input id="filter" className="form-control me-2" type="text" placeholder="Filtrar" value={filter.toString()}
          onChange={(event)=> setFilter (event.target.value)}/>
        </form>
      </div>
      

        <h3 className='init-message'>Bienvenido a la tienda virtual de Frënda clothes</h3>

      <div className='cards-container'>  
        {products.filter(f => f.product.includes(filter)).map((product, i) => (
          <div key={i} className='card'>
            <a className="link-products" href='link-productos'>
            <h4>{product.product}</h4>
            </a>
            <img className='img-product' src={product.image} alt='productos'/>
            <h6 >${product.price}</h6>
            <ProductsCounter/> 
            <button type="button" className="seeDetailButton btn btn-outline-dark" src="">Ver detalle</button>
          </div>
        ))}
      </div>  
    </div>   
  );
}



export default App;

