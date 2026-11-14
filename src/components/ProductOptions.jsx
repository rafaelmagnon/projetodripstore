import { useState } from 'react'

export default function ProductOptions({
  options = [],
  radius = '4px',
  shape = 'square',
  type = 'text',
}) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="product-options">
      {options.map(option => {
        const isSelected = selected === option
        const style = {
          borderRadius: shape === 'circle' ? '50%' : radius,
          background: type === 'color' ? option : 'transparent',
        }

        return (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(option)}
            className={`product-options__item product-options__item--${shape} ${
              isSelected ? 'product-options__item--selected' : ''
            }`}
            style={style}
          >
            {type === 'text' ? option : ''}
          </button>
        )
      })}
    </div>
  )
}