import { useState } from 'react'

export default function ProductDetails({ product }) {
  // Array de miniaturas oficiais da pasta public
  const thumbnails = [
    '/product-thumb-1.jpeg',
    '/product-thumb-2.jpeg',
    '/product-thumb-3.jpeg',
    '/product-thumb-4.jpeg',
    '/product-thumb-5.jpeg',
  ]

  const [selectedImage, setSelectedImage] = useState(product?.image || thumbnails[0])
  const [selectedSize, setSelectedSize] = useState('41')
  const [selectedColor, setSelectedColor] = useState('#666')

  if (!product) return <div>Produto não encontrado</div>

  const handleAddToCart = () => {
    alert(`Produto "${product.name}" (Tamanho: ${selectedSize}) adicionado ao carrinho com sucesso!`)
  }

  return (
    <div className="product-details" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', margin: '20px 0' }}>
      {/* Seção de Imagens e Miniaturas */}
      <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {/* Imagem Principal */}
        <div style={{ backgroundColor: '#f5f5f5', borderRadius: '4px', overflow: 'hidden', height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={selectedImage} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </div>

        {/* Miniaturas (Thumbnails) */}
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          {thumbnails.map((thumb, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(thumb)}
              style={{
                border: selectedImage === thumb ? '2px solid #ff2d55' : '2px solid transparent',
                borderRadius: '4px',
                padding: 0,
                cursor: 'pointer',
                background: '#f5f5f5',
                width: '70px',
                height: '70px',
                overflow: 'hidden'
              }}
            >
              <img src={thumb} alt={`Thumb ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      </div>

      {/* Informações do Produto e Ações */}
      <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <h2 style={{ fontSize: '28px', color: '#1f1f1f' }}>{product.name}</h2>
        <p style={{ color: '#666', fontSize: '14px' }}>Casual | Ref: {product.id} | <span style={{ color: '#f6aa1c' }}>★★★★☆ (90 avaliações)</span></p>

        <div style={{ display: 'flex', alignItems: 'baseline', gap: '15px' }}>
          <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f1f1f' }}>
            R$ {product.priceDiscount ? product.priceDiscount.toFixed(2) : product.price.toFixed(2)}
          </span>
          {product.priceDiscount && (
            <span style={{ fontSize: '16px', color: '#999', textDecoration: 'line-through' }}>
              R$ {product.price.toFixed(2)}
            </span>
          )}
        </div>

        <p style={{ color: '#474747', lineHeight: '1.5' }}>
          Conforto excepcional e design moderno. Ideal para o seu dia a dia ou prática esportiva leve. Produzido com materiais de alta qualidade para maior durabilidade.
        </p>

        {/* Seletor de Tamanho */}
        <div>
          <h4 style={{ marginBottom: '8px', color: '#474747' }}>Tamanho</h4>
          <div style={{ display: 'flex', gap: '10px' }}>
            {['38', '39', '40', '41', '42'].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  width: '45px',
                  height: '45px',
                  border: selectedSize === size ? '2px solid #ff2d55' : '1px solid #ccc',
                  backgroundColor: selectedSize === size ? '#ff2d55' : '#fff',
                  color: selectedSize === size ? '#fff' : '#333',
                  fontWeight: 'bold',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Botão Comprar / Adicionar ao Carrinho */}
        <button
          onClick={handleAddToCart}
          style={{
            marginTop: '20px',
            backgroundColor: '#f6aa1c',
            color: '#fff',
            border: 'none',
            padding: '15px 30px',
            fontSize: '16px',
            fontWeight: 'bold',
            borderRadius: '8px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            transition: 'background 0.2s'
          }}
        >
          Comprar
        </button>
      </div>
    </div>
  )
}