import { useNavigate } from "react-router-dom";
import "./PromoBanners.css";

const PromoBanners = () => {
  const navigate = useNavigate();

  return (
    <section className="promo-section">
      {/* SECTION HEADING */}
      <h2 className="promo-heading">Popular</h2>

      <div className="promo-grid">
        {/* LEFT BIG BANNER */}
        <div
          className="promo-card large"
          onClick={() => navigate("/plants")}
        >
          <img
            src="/banners/living-gift.jpg"
            alt="Living Gift"
          />
          <div className="promo-overlay red" />
          <div className="promo-content">
            <h2>A Living Gift – Upto 30% Off</h2>
            <p>
              Express true emotions with a gift that grows forever.
            </p>
            <button>Shop Now</button>
          </div>
        </div>

        {/* RIGHT TOP */}
        <div
          className="promo-card"
          onClick={() => navigate("/plants")}
        >
          <img
            src="/banners/miniature.jpg"
            alt="Miniature Garden"
          />
          <div className="promo-overlay green" />
          <div className="promo-content dark">
            <h3>Miniature Garden – Upto 30% Off</h3>
            <p>Enjoy a living garden even in small spaces.</p>
            <button>Shop Now</button>
          </div>
        </div>

        {/* RIGHT BOTTOM */}
        <div
          className="promo-card"
          onClick={() => navigate("/plants")}
        >
          <img
            src="/banners/seeds.jpg"
            alt="Organic Seeds"
          />
          <div className="promo-overlay green" />
          <div className="promo-content dark">
            <h3>Organic Seeds – 50% Off</h3>
            <p>
              Best quality seeds for organic lovers. No chemicals.
            </p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanners;
