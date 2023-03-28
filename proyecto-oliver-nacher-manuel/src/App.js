import React from "react";
import NavBar from "./components/NavBar/NavBar"
import Logo from "./components/NavBar/Logo"
import CartWidget from "./components/NavBar/CartWidget"
import CartContainer from "./components/cart/CartContainer";
import './App.css';
import './components/NavBar/nav.css'
import './components/ItemList/ItemList.css'
import './components/ItemDetailContainer/ItemDetail.css'
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./components/Context/CartContext";
import { Link } from "react-router-dom";


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="Header">
          <header className="Navbar-contenido">
            <div className="Navbar-logo">
              <Logo />
            </div>
            <div>
              <NavBar />
            </div>
            <div className="Navbar-cart">
              <Link to="/cart">
                <CartWidget />
              </Link>
            </div>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle" element={<h2>Productos</h2>} />
          <Route path="/detalle/:idProd" element={<ItemDetailContainer />} />
          <Route path="/categoria/:idCategory" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer/>} />

        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;



      