import Section from '../components/Section'
import ProductListing from '../components/ProductListing'
import Gallery from '../components/Gallery'
import { PRODUCTS_LIST, HOME_BANNERS, COLLECTION_IMAGES } from '../data/products'

export default function HomePage() {
  const categoryIcons = [
    { title: 'Camisetas', icon: '👕', path: '/produtos' },
    { title: 'Calças', icon: '👖', path: '/produtos' },
    { title: 'Bonés', icon: '🧢', path: '/produtos' },
    { title: 'Headphones', icon: '🎧', path: '/produtos' },
    { title: 'Tênis', icon: '👟', path: '/produtos' },
  ]

  return (
    <div className="home-page">
      <Gallery images={HOME_BANNERS} />

      {/* Ícones de Coleções / Categorias */}
      <div style={{ padding: '20px 40px', maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '20px', color: '#474747', fontSize: '24px' }}>
          Coleções em destaque
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', marginBottom: '40px' }}>
          {categoryIcons.map((cat, index) => (
            <div key={index} style={{ textAlign: 'center', cursor: 'pointer' }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '36px',
                marginBottom: '10px'
              }}>
                {cat.icon}
              </div>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#474747' }}>{cat.title}</span>
            </div>
          ))}
        </div>

        {/* Banners de Coleções */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
          {COLLECTION_IMAGES.map((col) => (
            <div key={col.id} style={{ flex: '1 1 300px', maxWidth: '380px', height: '220px', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={col.image} alt={`Coleção ${col.id}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Produtos em Alta */}
      <div style={{ padding: '0 40px 40px 40px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <Section 
          title="Produtos em alta" 
          titleAlign="center" 
          link={{ href: '/produtos', text: 'Ver todos →' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <ProductListing products={PRODUCTS_LIST} />
          </div>
        </Section>
      </div>

      {/* Guia de Oferta Especial */}
      <div style={{ backgroundColor: '#fff', padding: '60px 40px', borderTop: '1px solid #eee', borderBottom: '1px solid #eee', marginBottom: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
          
          {/* Lado esquerdo: Imagem inteira e centralizada */}
          <div style={{ flex: '1 1 450px', position: 'relative', minHeight: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Círculo de fundo decorativo */}
            <div style={{ position: 'absolute', width: '320px', height: '320px', borderRadius: '50%', background: 'linear-gradient(180deg, rgba(205, 193, 255, 0.3) 0%, rgba(175, 159, 255, 0.1) 100%)', zIndex: 0 }}></div>
            
            <img 
              src="/product-thumb-1.jpeg" 
              alt="Oferta Especial" 
              style={{ 
                maxWidth: '85%', 
                maxHeight: '320px', 
                objectFit: 'contain', 
                position: 'relative', 
                zIndex: 1, 
                transform: 'none', 
                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' 
              }} 
            />
          </div>

          {/* Lado direito: Textos e botão */}
          <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'left' }}>
            <span style={{ color: '#428F99', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>Oferta Especial</span>
            <h2 style={{ fontSize: '36px', color: '#1f1f1f', lineHeight: '1.2' }}>Air Jordan edição de colecionador</h2>
            <p style={{ color: '#474747', lineHeight: '1.6' }}>
              Conforto incomparável e estilo autêntico. Aproveite o desconto exclusivo por tempo limitado em nossa seleção especial de sneakers.
            </p>
            <div>
              <a href="/produtos" style={{
                display: 'inline-block',
                backgroundColor: '#ff2d55',
                color: '#fff',
                padding: '12px 30px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginTop: '10px'
              }}>
                Ver Oferta
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}