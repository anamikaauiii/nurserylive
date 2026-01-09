import { useState } from "react";
import "./Home.css";

import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";
import hero4 from "../assets/hero/hero4.jpg";

export default function Home() {
  const slides = [hero1, hero2, hero3, hero4];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="home">
      {/* 🔹 YOUR EXISTING TOP BAR */}
      {/* <TopNavbar /> or your JSX here */}

      {/* 🔹 YOUR EXISTING NAVBAR */}
      {/* <MainNavbar /> */}

      {/* 🔹 YOUR EXISTING CATEGORY SECTIONS */}
      {/* category menu, circular icons, etc */}

      {/* 🔥 HERO SLIDER (REPLACES OLD HERO IMAGE ONLY) */}
      <div className="hero-slider">
        <img src={slides[index]} alt="hero" />

        <button className="arrow left" onClick={prev}>
          ‹
        </button>
        <button className="arrow right" onClick={next}>
          ›
        </button>
      </div>

      {/* 🔹 REST OF HOME PAGE CONTENT */}
    </div>
  );
}
