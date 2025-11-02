
const ProductCard = ({product}) => {
  return (
    <div className="product-card-cont">
      <img src={product.image} alt={product.title}/>
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div>
  )
}

export default ProductCard
