function ProductCard({ id, nombre, precio }) {
  return (
    <section className="product-card">
      <h3>{nombre}</h3>
      <p className="precio">$ {precio.toFixed(2)}</p>
    </section>
   ) 
}

export default ProductCard