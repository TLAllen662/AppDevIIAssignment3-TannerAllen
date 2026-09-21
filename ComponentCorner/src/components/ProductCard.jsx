import './ProductCard.css'

function ProductCard({ name, price, image, description }) {
  return (
    <article className="product-card">
      <img src={image} alt={name} />
      <div className="product-card__details">
        <h2>{name}</h2>
        <p>{description}</p>
        <strong aria-label={`Price: ${price}`}>{price}</strong>
      </div>
    </article>
  )
}

export default ProductCard
