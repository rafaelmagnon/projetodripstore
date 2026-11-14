import { useParams } from 'react-router-dom'
import ProductDetails from '../components/ProductDetails'
import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import { PRODUCTS_LIST } from '../data/products'

export default function ProductViewPage() {
  const { id } = useParams()

  // Busca o produto correspondente ao ID da URL 
  const product = PRODUCTS_LIST.find((p) => String(p.id) === String(id))

  if (!product) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Produto não encontrado!</h2>
      </div>
    )
  }

  return (
    <div className="product-view-page" style={{ padding: '30px 40px' }}>
      {/* Passa o produto encontrado para o componente de detalhes */}
      <ProductDetails product={product} />

      {/* Seção de produtos recomendados no rodapé */}
      <Section title="Produtos relacionados" titleAlign="left">
        <ProductListing products={PRODUCTS_LIST.slice(0, 4)} />
      </Section>
    </div>
  )
}