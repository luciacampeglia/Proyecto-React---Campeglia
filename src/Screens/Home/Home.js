import './Home.css'
import Cards from '../../Components/Home/Card/Cards';
import { FilterInput } from '../../Components/Home/Navbar/Filter';
import { Card } from '../../Components/Home/Card/Cards';



export function Home() {

  return (
    <div className="Home">
        <h3 className='init-message'>Bienvenido a la tienda virtual de Frënda clothes</h3>  
    </div>  
  );
}

export function ProductsList() {  
  return (
    <div className="ProductsList">
        <Cards/>        
    </div>   
  );
}




