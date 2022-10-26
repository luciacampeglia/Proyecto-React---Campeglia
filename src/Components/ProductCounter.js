import {useState} from 'react';
import './ProductCounter.css'
function ProductsCounter (){
    
    const [counter, setCounter] = useState(0);
    
    const handdleDismiss = () =>{
        if(counter > 0){
        setCounter(counter - 1);
        };
    };
    const handdleAdd = () =>{
        if (counter < 10)
        setCounter(counter + 1);
    };
    return(
        <div className='border-container'>
            <div className='grid-container'>
                <button onClick={handdleDismiss} type="button" className=" counterButton btn btn-outline-dark">-</button>
                <h6 className='counterNumb'> {counter} </h6>
                <button onClick={handdleAdd} type="button" className=" counterButton btn btn-outline-dark">+</button>
            </div>
                <button type="button" className="addToCartButton btn btn-outline-dark">Agregar a carrito</button>
        </div>
    )
};

export default ProductsCounter;