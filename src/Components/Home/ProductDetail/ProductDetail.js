import products from "../Products/Products"
import ProductsCounter from "../ProductCounter/ProductCounter"




function DetailCard () {
   
    return(
        
        <div className='detailCardContainer'>  
        {products.map((product, i) => (
          <div key={i} className='detailCard'>
            <h5>{product.product}</h5>,
            <p>{product.description}</p>,
            <img className='img-product' src={product.image} alt='productos'/>,
            <ProductsCounter/>
          </div>
        ))}
      ||</div>    
    )
}


export default DetailCard