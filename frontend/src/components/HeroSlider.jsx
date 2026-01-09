import { useState } from "react";
import "./HeroSlider.css";

import hero1 from "../assets/hero/hero1.jpg";

const slides = [
  { img: hero1, link: "/product-page" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  return (
    <div className="hero-slider">
      <a href={slides[index].link}>
        <img
          src={slides[index].img}
          className="hero-img"
          alt="hero"
        />
      </a>
    </div>
  );
}
