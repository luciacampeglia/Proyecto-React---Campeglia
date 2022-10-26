import products from "./Products"
import App from "../App"
import swal from "sweetalert"


function DetailCard () {
        <App/>
    return(
        
        <div className='detailCardContainer'>  
        {products.map((product, i) => (
          <div key={i} className='detailCard'>
            <h5>{product.product}</h5>,
            <p>{product.description}</p>,
            <img className='img-product' src={product.image} alt='productos'/>,
          </div>
        ))}
      </div>    
    )
}


export default DetailCard