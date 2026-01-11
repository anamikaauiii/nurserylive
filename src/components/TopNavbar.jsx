import "./TopNavbar.css";

export default function TopNavbar() {
  return (
    <div className="topbar">
      {/* LEFT */}
      <div className="topbar-left">
        <span className="rewards">Rewards</span>
        <span className="link">Help</span>
        <span className="link">My Orders</span>
        <span className="link">Offers</span>
      </div>

      {/* RIGHT */}
      <div className="topbar-right">
        <i className="icon fab fa-facebook-f"></i>
        <i className="icon fab fa-twitter"></i>
        <i className="icon fab fa-pinterest-p"></i>
        <i className="icon fab fa-instagram"></i>
        <i className="icon fab fa-youtube"></i>
        <i className="icon fab fa-linkedin-in"></i>
      </div>
    </div>
  );
}
