
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

// Club pages
import ClubsIndex from "./pages/clubs/ClubsIndex";
import ClubPage from "./pages/clubs/ClubPage";

// League pages
import LeaguesIndex from "./pages/leagues/LeaguesIndex";
import LeaguePage from "./pages/leagues/LeaguePage";

// Collection pages
import CollectionsIndex from "./pages/collections/CollectionsIndex";
import CollectionPage from "./pages/collections/CollectionPage";

// Product category pages
import Scarves from "./pages/Scarves";
import Balls from "./pages/Balls";
import NewArrivals from "./pages/NewArrivals";

function App() {
  return (
    <LanguageProvider>
      <CurrencyProvider>
        <AuthProvider>
          <CartProvider>
            <BrowserRouter>
              <Layout>
                <Routes>
                  {/* Main pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/new-arrivals" element={<NewArrivals />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  
                  {/* Club routes */}
                  <Route path="/clubs" element={<ClubsIndex />} />
                  <Route path="/clubs/:slug" element={<ClubPage />} />
                  
                  {/* League routes */}
                  <Route path="/leagues" element={<LeaguesIndex />} />
                  <Route path="/leagues/:slug" element={<LeaguePage />} />
                  
                  {/* Collection routes */}
                  <Route path="/collections" element={<CollectionsIndex />} />
                  <Route path="/collections/:slug" element={<CollectionPage />} />
                  
                  {/* Product category routes */}
                  <Route path="/scarves" element={<Scarves />} />
                  <Route path="/balls" element={<Balls />} />
                  
                  {/* Auth routes */}
                  <Route path="/auth/login" element={<Login />} />
                  <Route path="/auth/register" element={<Register />} />
                  
                  {/* 404 */}
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
