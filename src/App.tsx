
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import { CurrencyProvider } from "./context/CurrencyContext";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <AuthProvider>
          <CartProvider>
            <BrowserRouter>
              <Layout>
                                            <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="/catalog" element={<Catalog />} />
                              <Route path="/product/:id" element={<ProductDetail />} />
                              <Route path="/cart" element={<Cart />} />
                              <Route path="/auth/login" element={<Login />} />
                              <Route path="/auth/register" element={<Register />} />
                              <Route path="*" element={<NotFound />} />
                            </Routes>
              </Layout>
            </BrowserRouter>
          </CartProvider>
        </AuthProvider>
      </CurrencyProvider>
    </LanguageProvider>
  );
}

export default App;
