import { useState } from "react";
import LoginCard from "./LoginCard";
import "./MainNavbar.css";

export default function MainNavbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="main-navbar">
        {/* LEFT */}
        <div className="logo">nurserylive</div>

        {/* SEARCH */}
        <div className="search-box">
          <input type="text" placeholder="What are you looking for?" />
          <button>🔍</button>
        </div>

        {/* RIGHT */}
        <div className="nav-actions">
          <div className="support">
            💬
            <div>
              <strong>Expert Support</strong>
              <span>Available 24/7</span>
            </div>
          </div>

          <div
            className="login"
            onClick={() => setShowLogin(true)}
          >
            ⚡ Login
          </div>

          <div className="cart">🛒</div>
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div className="category-bar">
        {[
          "Gardening",
          "Plants",
          "Seeds",
          "Bulbs",
          "Planters",
          "Soil & Fertilizer",
          "Gifts",
          "Pebbles",
          "Accessories",
          "Corporate Gifting",
        ].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      {/* LOGIN CARD */}
      {showLogin && <LoginCard onClose={() => setShowLogin(false)} />}
    </>
  );
}
