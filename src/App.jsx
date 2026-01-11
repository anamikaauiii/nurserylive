import { Routes, Route } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import CategoryBar from "./components/CategoryBar";

import HeroSlider from "./components/HeroSlider";
import ProductList from "./components/ProductList";
import PromoBanners from "./components/PromoBanners";
import TrendingCategories from "./components/TrendingCategories";
import AppPromo from "./components/AppPromo";

import Plants from "./pages/Plants";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      {/* NAVBARS ALWAYS VISIBLE */}
      <TopNavbar />
      <MainNavbar />
      <CategoryBar />

      {/* ROUTES */}
      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroSlider />

              {/* PRODUCT CARDS */}
              <ProductList />

              {/* PROMO BANNERS (AFTER CARDS) */}
              <PromoBanners />

              {/* TRENDING CATEGORIES */}
              <TrendingCategories />

              {/* APP PROMO */}
              <AppPromo />
            </>
          }
        />

        {/* PLANTS PAGE */}
        <Route path="/plants" element={<Plants />} />

        {/* OTHER PAGES (placeholders) */}
        <Route path="/seeds" element={<h1>Seeds Page</h1>} />
        <Route path="/gifts" element={<h1>Gifts Page</h1>} />
        <Route
          path="/collections/balcony-and-terrace-garden"
          element={<h1>Balcony Garden</h1>}
        />

        {/* CART PAGE */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
