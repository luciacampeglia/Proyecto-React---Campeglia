import {useParams} from "react-router-dom"
import { getProductById } from "../../Components/Home/Products/Products";
import { useState, useEffect } from "react";

export const ShowProducts = () => {
    const {product} = useParams();
    const {idProduct} = useParams();
    const [products, setProducts] = useState({});

    useEffect(() => {
        setProducts(getProductById(idProduct));   
    }, []);

    return(
        <div>
            {product}
            {products.product}
        </div>
    );
}

