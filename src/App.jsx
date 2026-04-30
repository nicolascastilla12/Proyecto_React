import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import ProductCard from "./components/ProductCard"; // Importamos el componente
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }
function App() {
  // 1. Mantenemos tus productos
  const [productos] = useState([
    { id: 1, nombre: "Laptop", precio: 1200.00 },
    { id: 2, nombre: "Mouse", precio: 25.99 },
    { id: 3, nombre: "Teclado", precio: 79.99 },
    { id: 4, nombre: "Monitor", precio: 350.00 },
    { id: 5, nombre: "Audífonos", precio: 120.00 },
    { id: 6, nombre: "Webcam", precio: 65.00 },
    { id: 7, nombre: "Hub USB", precio: 45.50 },
    { id: 8, nombre: "Mousepad", precio: 15.99 },
    { id: 9, nombre: "Soporte Laptop", precio: 35.00 },
  ]);

  // --- NUEVO: Estado para el carrito ---
  const [cart, setCart] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);

  // --- NUEVO: Función para agregar a seleccionados ---
  const agregarASeleccionados = (producto) => {
    setSeleccionados([...seleccionados, producto]);
  };

  // --- NUEVO: Función para agregar seleccionados al carrito ---
  const agregarSeleccionadosAlCarrito = () => {
    setCart([...cart, ...seleccionados]);
    setSeleccionados([]);
  };

  // --- NUEVO: Función para limpiar el carrito ---
  const limpiarCarrito = () => {
    setCart([]);
  };

  const handleVerTodos = () => {
    alert("Ver todos los productos");
  };

  // Mantenemos tu función original pero ahora podemos usarla para algo más si quieres
  const handleAgregarProducto = () => {
    alert("Esta función podría servir para crear un producto nuevo");
  };

  return (
    <section>
      <h1>Bienvenido Nicolas castilla</h1>
      <h2>Datachan</h2>
      <h3>CESDE Bogotá</h3>

      {/* --- NUEVO: Contador visual del carrito --- */}
      <div style={{ background: '#222', padding: '10px', borderRadius: '8px', marginBottom: '20px' }}>
         🛒 Productos en carrito: <strong>{cart.length}</strong>
      </div>

      {/* --- NUEVO: Productos seleccionados --- */}
      {seleccionados.length > 0 && (
        <div style={{ background: '#444', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '2px solid #ffaa00' }}>
          <h3>Productos Seleccionados: {seleccionados.length}</h3>
          <ul>
            {seleccionados.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio.toFixed(2)}
              </li>
            ))}
          </ul>
          <button 
            onClick={agregarSeleccionadosAlCarrito}
            style={{ background: '#00dd00', color: '#000', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold', marginRight: '10px' }}
          >
            Agregar Productos al Carrito
          </button>
        </div>
      )}

      {/* --- NUEVO: Lista de productos en el carrito --- */}
      {cart.length > 0 && (
        <div style={{ background: '#333', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
          <h3>Carrito:</h3>
          <ul>
            {cart.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio.toFixed(2)}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Total: ${cart.reduce((sum, p) => sum + p.precio, 0).toFixed(2)}
          </p>
          <button 
            onClick={limpiarCarrito}
            style={{ background: '#dd0000', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Limpiar Carrito
          </button>
        </div>
      )}
      
      <div className="botones-principales">
        <button onClick={handleVerTodos}>Ver Todos</button>
        <button onClick={handleAgregarProducto}>Agregar Producto</button>
      </div>

      <div className="productos-container">
        {productos.map((producto) => (
          <ProductCard 
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            // --- NUEVO: Pasamos la función como Prop ---
            onAdd={() => agregarASeleccionados(producto)}
          />
        ))}
      </div>
    </section>
  ); 
}

export default App;