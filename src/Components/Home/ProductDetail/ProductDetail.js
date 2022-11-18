import products from "../Products/Products"




function DetailCard () {
   
    return(
        
        <div className='detailCardContainer'>  
        <button>Detalle</button>
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