function ProductCard({ id, nombre, precio }) {
  const handleAgregar = () => {
    alert(`${nombre} agregado al carrito`);
  };

  const handleVer = () => {
    alert(`Detalles de ${nombre}: $${precio.toFixed(2)}`);
  };

  return (
    <section className="product-card">
      <h3>{nombre}</h3>
      <p className="precio">$ {precio.toFixed(2)}</p>
      <div className="botones">
        <button className="btn-agregar" onClick={handleAgregar}>
          Agregar Producto
        </button>
        <button className="btn-ver" onClick={handleVer}>
          Ver
        </button>
      </div>
    </section>
   ) 
}

export default ProductCard