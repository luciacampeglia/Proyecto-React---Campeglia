import {createContext, useState} from "react";

export const CartContext = createContext ({
    cart: [],
    isInCart: () => {},
    addToCart: () => {},
    deleteFromCart: ()=> {},

});

export function CartProvider ({children}) {
    const [cart, setCart] = useState ([]);
    
    const getFromCart =(id) => {
        return cart.find((order) =>order.id === id);
    };
    const isInCart = (id) =>{
        return id !== undefined ? getFromCart(id) : undefined
    }
    const addToCart = (obj) =>{
    if(isInCart(obj && obj.id)){
        console.log("Producto con ese Id ya existente")
        return;
    }
        console.log("Producto agregado al carrito")
    setCart([...cart],obj);
    };

    return<CartContext.Provider value = {{cart, addToCart, isInCart}}/>

}