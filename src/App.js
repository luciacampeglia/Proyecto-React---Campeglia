import './App.css';
import Navbar from './Components/Navbar';
import products from './Components/Products';

function App() {
  return (
    
      <div className="App">
        <Navbar/>
        <p className='init-message'>Bienvenido a la tienda virtual de Frënda clothes</p>
        {products.map((product, i) => (
          <div key={i} className='card'>
            <div >{product.product}</div>
            <img src={product.image}/>
          </div>
        ))}
      </div>
     
  );
}

export default App;
