import products from "./Products";

/* export const productsApi = async () =>{
    let productos = []
    await fetch ("./Products/Products")
        .then(response => response.json())
        .then(data => (products = data));
        console.log(products)
    return productos;
} */


export const productsApi = async () => {
    const url = './Products'
    const resp = await fetch(url);
    const data = await resp.json();
  
    const products = data.map((product) =>({
      product: product.product,
      imgage: product.image,
      price: product.price,
    }))
    console.log(products);
    return products
  }