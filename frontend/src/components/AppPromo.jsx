import "./AppPromo.css";
import { FiUsers, FiTruck, FiAward, FiPercent } from "react-icons/fi";

const AppPromo = () => {
  return (
    <div className="app-promo">
      {/* TEXT + APP BUTTONS */}
      <div className="app-promo-top">
        <p>Happiness is availing great offers on Nurserylive App!</p>

        <div className="store-buttons">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
        </div>
      </div>

      {/* ICON ROW */}
      <div className="quick-links">
        <div className="quick-item">
          <FiUsers size={36} />
          <span>Help Center</span>
        </div>

        <div className="quick-item">
          <FiTruck size={36} />
          <span>Track Order</span>
        </div>

        <div className="quick-item">
          <FiAward size={36} />
          <span>Rewards</span>
        </div>

        <div className="quick-item">
          <FiPercent size={36} />
          <span>Offers</span>
        </div>
      </div>
    </div>
  );
};

export default AppPromo;
