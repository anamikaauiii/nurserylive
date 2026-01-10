import { Routes, Route } from "react-router-dom";

import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import CategoryBar from "./components/CategoryBar";
import HeroSlider from "./components/HeroSlider";
import AppPromo from "./components/AppPromo";

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
              <AppPromo />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/plants" element={<h1>Plants Page</h1>} />
        <Route path="/seeds" element={<h1>Seeds Page</h1>} />
        <Route path="/gifts" element={<h1>Gifts Page</h1>} />
        <Route
          path="/collections/balcony-and-terrace-garden"
          element={<h1>Balcony Garden</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
