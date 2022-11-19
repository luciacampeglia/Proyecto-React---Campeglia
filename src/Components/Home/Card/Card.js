
const Card = ({ product }) => {
    return (
        <div>
            <h4>{product.product}</h4>
            <img alt="imagen-producto" src="{product.image}"/>
            <p>{product.price}</p>
        </div>
    );
};
 export default Card