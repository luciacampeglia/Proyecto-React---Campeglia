import './Home.css'
import Cards from '../../Components/Home/Card/Cards';
import DetailCard from '../../Components/Home/ProductDetail/ProductDetail';


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

export function DetailProd(){
  return(
    <>
    <DetailCard/>
    </>
  )
}



