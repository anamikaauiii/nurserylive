import "./LoginCard.css";

export default function LoginCard({ onClose }) {
  return (
    <>
      <div className="login-overlay" onClick={onClose}></div>

      <div className="login-container">
        {/* LEFT GREEN */}
        <div className="login-left">
          <h1>
            Kwik<span className="bolt">⚡</span>Pass
          </h1>
          <p>Largest online nursery in india</p>
        </div>

        {/* RIGHT WHITE (SHORTER BOX) */}
        <div className="login-right">
          <h2>Login / Signup</h2>
          <span className="subtitle">Enter Mobile Number</span>

          <div className="input-wrapper">
            <div className="country-code">
              <svg width="18" height="12" viewBox="0 0 18 12">
                <rect width="18" height="4" fill="#FF9933" />
                <rect y="4" width="18" height="4" fill="#FFFFFF" />
                <rect y="8" width="18" height="4" fill="#138808" />
                <circle cx="9" cy="6" r="1.2" fill="#000080" />
              </svg>
              <span>+91</span>
            </div>
            <input type="tel" placeholder="Enter Mobile Number" />
          </div>

          <p className="terms">
            By logging in, you're agreeing to our <br />
            <span>Privacy Policy</span> & <span>Terms of Service</span>
          </p>

          <p className="trouble">Trouble logging in?</p>
        </div>
      </div>
    </>
  );
}
