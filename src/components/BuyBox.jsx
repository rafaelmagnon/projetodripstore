import starIcon from '../assets/star-icon.svg'

const formatar = valor =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

export default function BuyBox({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) {
  return (
    <div className="buy-box">
      <h1 className="buy-box__name">{name}</h1>
      <p className="buy-box__reference">Ref: {reference}</p>

      <div className="buy-box__rating">
        <span className="buy-box__stars">
          {stars} <img src={starIcon} alt="estrelas" width={16} height={16} />
        </span>
        <span className="buy-box__rating-count">({rating} avaliações)</span>
      </div>

      <div className="buy-box__prices">
        {priceDiscount ? (
          <>
            <span className="buy-box__price buy-box__price--old">{formatar(price)}</span>
            <span className="buy-box__price">{formatar(priceDiscount)}</span>
          </>
        ) : (
          <span className="buy-box__price">{formatar(price)}</span>
        )}
      </div>

      <div className="buy-box__description">
        <h3>Descrição do produto</h3>
        <p>{description}</p>
      </div>

      {children}

      <button className="buy-box__button">COMPRAR</button>
    </div>
  )
}