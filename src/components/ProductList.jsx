import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import ProductCard from "./ProductCard";
import "./ProductList.css";

const ProductList = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 5
    );
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -1100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 1100,
      behavior: "smooth",
    });
  };

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      if (canScrollRight) {
        scrollRight();
      } else {
        scrollRef.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [canScrollRight]);

  return (
    <section className="nl-section">
      <h2 className="nl-heading">
        Value For Money – Upto 35% Off
      </h2>

      <div className="nl-grid-wrapper">
        {/* LEFT ARROW */}
        <button
          className={`nl-grid-arrow left ${
            !canScrollLeft ? "disabled" : ""
          }`}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          ‹
        </button>

        {/* SCROLLABLE GRID */}
        <div
          className="nl-grid-scroll"
          ref={scrollRef}
          onScroll={checkScroll}
        >
          <div className="nl-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

            {/* VIEW MORE CARD */}
            <div
              className="nl-view-more"
              onClick={() => navigate("/plants")}
            >
              <p>Upto 35% Off</p>
              <button>View more</button>
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          className={`nl-grid-arrow right ${
            !canScrollRight ? "disabled" : ""
          }`}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default ProductList;
