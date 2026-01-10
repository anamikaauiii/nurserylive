import "./Cart.css";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h2>Your cart</h2>
        <span
          className="continue-shopping"
          onClick={() => navigate("/")}
        >
          Continue shopping →
        </span>
      </div>

      <div className="cart-box">
        <p className="empty-text">Your cart is empty</p>

        <button
          className="continue-btn"
          onClick={() => navigate("/")}
        >
          <FiShoppingCart />
          Continue shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
