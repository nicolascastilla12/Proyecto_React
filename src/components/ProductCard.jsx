function ProductCard({ id, nombre, precio }) {
  const handleAgregar = () => {
    alert(`${nombre} agregado al carrito`);
  };

  return (
    <section className="product-card">
      <h3>{nombre}</h3>
      <p className="precio">$ {precio.toFixed(2)}</p>
      <button className="btn-agregar" onClick={handleAgregar}>
        Agregar Producto
      </button>
    </section>
   ) 
}

export default ProductCard