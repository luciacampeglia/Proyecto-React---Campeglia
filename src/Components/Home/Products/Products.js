
const products = [
    {
        "id": "SSBL01",
        "product": "Buzo Levis",
        "image": "../imagenes/buzo-levis.jpg",
        "price": "4900",
        "gender": "Hombre Mujer",
        "category": "Buzos",
        "description": "Buzo de algodón unisex",
        "stock": 10,
        
    },
    {
        "id": "SSRESC",
        "product": "Remera Santa Cruz",
        "image": "../imagenes/remera-hombre.jpg",
        "price": "2900",
        "gender": "Hombre",
        "category": "Remeras",
        "description": "Remera de algodón estampada",
        "stock": 7,
        
    },
    {
        "id": "SSREPU",
        "product": "Remera Puma",
        "image": "../imagenes/remera-mujer.jpg",
        "price": "2100",
        "gender": "Mujer",
        "category": "Remeras",
        "description": "Remera de algodón estampada",
        "stock": 5,
        
    },
    {
        "id": "SSTD01",
        "product": "Top deportivo Nike",
        "image": "../imagenes/top-colores.jpg",
        "price": "2200",
        "gender": "Mujer",
        "category": "Tops",
        "description": "Top deportivo de lycra",
        "stock": 10,
        
    },
    {
        "id": "SSSDM1",
        "product": "Short Adidas",
        "image": "../imagenes/short-mujer.jpg",
        "price": "2700",
        "gender": "Mujer",
        "category": "Shorts",
        "description": "Short deportivo con calza",
        "stock": 8,
        
    },
    {
        "id": "SSSDH1",
        "product": "Short Nike",
        "image": "../imagenes/short-hombre.jpg",
        "price": "2900",
        "gender": "Hombre",
        "category": "Shorts",
        "description": "Short deportivo con calza",
        "stock": 8,
        
    },
]

function getData(){
    return new Promise ((resolve, reject) =>{
        if (products.length === 0){
            reject(new Error ('La lista está vacía'))
        }
    setTimeout(
        () => {
            resolve(products);
        }, 2000
    )
    })
}
getData()
    .then(
        prod => {console.log(prod)}
    )
    .catch(
        err => {console.log(err.message)}
    );



export default products;
