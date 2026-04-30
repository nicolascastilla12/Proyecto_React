// Agregamos 'onAdd' a las props que recibe la función
function ProductCard({ id, nombre, precio, onAdd }) {
  return (
    <section 
      className="product-card" 
      onClick={onAdd}
      style={{ cursor: 'pointer' }}
    >
      <h3>{nombre}</h3>
      {/* Usamos toFixed(2) para que el precio siempre tenga dos decimales */}
      <p className="precio">$ {precio.toFixed(2)}</p>
    </section>
  ); 
}

export default ProductCard;