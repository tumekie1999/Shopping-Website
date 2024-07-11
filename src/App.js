import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { SignIn } from './pages/signin';
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Searchpage } from "./pages/shop/searchpage";

function App() {
  const [results, setResults] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar setResults={setResults} setIsSearchPerformed={setIsSearchPerformed} />
          <Routes>
            <Route 
              path="/" 
              element={
                isSearchPerformed ? (
                  <Searchpage results={results} />
                ) : (
                  <Shop />
                )
              } 
            />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
