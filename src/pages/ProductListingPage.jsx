import FilterGroup from '../components/FilterGroup'
import ProductListing from '../components/ProductListing'
import { PRODUCTS_LIST } from '../data/products'

export default function ProductListingPage() {
  
  const categoryOptions = [
    { text: 'Esporte e Lazer', value: 'esporte' },
    { text: 'Casual', value: 'casual' },
    { text: 'Corrida', value: 'corrida' },
    { text: 'Skate', value: 'skate' },
  ]

  const brandOptions = [
    { text: 'Nike', value: 'nike' },
    { text: 'Adidas', value: 'adidas' },
    { text: 'Puma', value: 'puma' },
    { text: 'Vans', value: 'vans' },
  ]

  const genderOptions = [
    { text: 'Masculino', value: 'masculino' },
    { text: 'Feminino', value: 'feminino' },
    { text: 'Unissex', value: 'unissex' },
  ]

  return (
    <div className="product-listing-page" style={{ display: 'flex', gap: '32px', padding: '30px 40px' }}>
      {/* Barra lateral de filtros */}
      <aside className="product-listing__sidebar" style={{ width: '280px', background: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Filtrar por</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <FilterGroup title="Marca" inputType="checkbox" options={brandOptions} />
          <hr style={{ border: '0', borderTop: '1px solid #ddd' }} />
          <FilterGroup title="Categoria" inputType="checkbox" options={categoryOptions} />
          <hr style={{ border: '0', borderTop: '1px solid #ddd' }} />
          <FilterGroup title="Gênero" inputType="checkbox" options={genderOptions} />
        </div>
      </aside>
      
      {/* Conteúdo principal com a vitrine */}
      <main className="product-listing__content" style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '22px' }}>Resultados para "Produtos"</h1>
          <span style={{ color: '#666', fontSize: '14px' }}>{PRODUCTS_LIST.length} produtos encontrados</span>
        </div>
        
        <ProductListing products={PRODUCTS_LIST} />
      </main>
    </div>
  )
}