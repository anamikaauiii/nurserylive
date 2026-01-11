import { useState } from "react";
import LoginCard from "./LoginCard";
import "./MainNavbar.css";
import { useNavigate } from "react-router-dom";
import { FiZap, FiShoppingCart } from "react-icons/fi";

export default function MainNavbar() {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();   // ✅ ADD THIS

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
  <FiZap size={18} />
  <span>Login</span>
</div>


          {/* CART */}
          <div
  className="cart"
  onClick={() => navigate("/cart")}
>
  <FiShoppingCart size={20} />
</div>

        </div>
      </div>

      {/* LOGIN CARD */}
      {showLogin && <LoginCard onClose={() => setShowLogin(false)} />}
    </>
  );
}
