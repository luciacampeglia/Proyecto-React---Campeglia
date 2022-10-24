import './App.css';
import Navbar from './Components/Navbar';
import products from './Components/Products';

function App() {
  return (
    
    <div className="App">
        <Navbar/>
        <h3 className='init-message'>Bienvenido a la tienda virtual de Frënda clothes</h3>

      <div className='cards-container'>  
        {products.map((product, i) => (
          <div key={i} className='card'>
            <a className="link-products" href='link-productos'>
            <h4>{product.product}</h4>
            <img className='img-product' src={product.image} alt='productos'/>
            <h6 >${product.price}</h6>
            </a>
          </div>
        ))}
      </div>  
    </div>
     
  );
}

export default App;
