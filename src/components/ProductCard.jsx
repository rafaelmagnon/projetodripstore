import { Link } from 'react-router-dom'

const formatar = valor =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ProductCard({ id, image, name, price, priceDiscount }) {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <img src={image} alt={name} width={292} height={321} />
      <h3 className="product-card__name">{name}</h3>

      <div className="product-card__prices">
        {priceDiscount ? (
          <>
            <span className="product-card__price product-card__price--old">
              {formatar(price)}
            </span>
            <span className="product-card__price">{formatar(priceDiscount)}</span>
          </>
        ) : (
          <span className="product-card__price">{formatar(price)}</span>
        )}
      </div>
    </Link>
  )
}