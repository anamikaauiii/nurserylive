import "./App.css";

function App() {
  return (
    <div className="app">
      {/* TOP BAR */}
      <div className="top-bar">
        <span>Rewards</span>
        <span>Help</span>
        <span>My Orders</span>
        <span>Offers</span>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="logo">nurserylive</div>

        <div className="search-box">
          <input type="text" placeholder="What are you looking for?" />
          <button>🔍</button>
        </div>

        <div className="header-actions">
          <span>Expert Support</span>
          <span>Login</span>
          <span>🛒</span>
        </div>
      </header>

      {/* NAV MENU */}
      <nav className="nav-menu">
        <a>Gardening</a>
        <a>Plants</a>
        <a>Seeds</a>
        <a>Bulbs</a>
        <a>Planters</a>
        <a>Soil & Fertilizer</a>
        <a>Gifts</a>
        <a>Pebbles</a>
        <a>Accessories</a>
        <a>Corporate Gifting</a>
      </nav>

      {/* CATEGORY ICONS */}
      <section className="categories-row">
        {[
          "Offers",
          "Gardening",
          "Plants",
          "Seeds",
          "Bulbs",
          "Pots",
          "Fertilizers",
          "Corporate",
          "Pebbles",
          "Accessories",
        ].map((item) => (
          <div key={item} className="category-item">
            <div className="circle"></div>
            <p>{item}</p>
          </div>
        ))}
      </section>

      {/* HERO BANNER */}
      <section className="hero-banner">
        <h1>Happiness</h1>
        <p>is turning your space into a garden</p>
      </section>
    </div>
  );
}

export default App;
