import ProductCard from './ProductCard'


export default function ProductListing({ products = [] }) {
  return (
    <div className="product-listing">
      {products.map((p, i) => (
        <ProductCard key={p.id ?? i} id={p.id ?? i + 1} {...p} />
      ))}
    </div>
  )
}