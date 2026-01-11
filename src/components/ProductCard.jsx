import { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  // SAFETY: support image OR images
  const images = product.images ? product.images : [product.image];
  const [index, setIndex] = useState(0);

  const next = () =>
    setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );

  return (
    <div className="nl-card">
      {/* Discount badge */}
      <span className="nl-discount">{product.discount}</span>

      {/* Image (carousel-ready) */}
      <div className="nl-image">
        <img src={images[index]} alt={product.title} />

        {images.length > 1 && (
          <>
            <button className="nl-arrow left" onClick={prev}>
              ‹
            </button>
            <button className="nl-arrow right" onClick={next}>
              ›
            </button>
          </>
        )}
      </div>

      {/* Price */}
      <div className="nl-price">
        <span className="nl-old">₹{product.oldPrice}</span>
        <span className="nl-new">₹{product.price}</span>
      </div>

      {/* Title */}
      <h4 className="nl-title">{product.title}</h4>

      {/* Rating */}
      <div className="nl-rating">
        {"★".repeat(Math.round(product.rating))}
        <span>{product.reviews} reviews</span>
      </div>

      {/* Offer */}
      <div className="nl-offer">📢 Offers Inside</div>

      {/* Add to cart (hover only) */}
      <button className="nl-cart-btn">Add to cart</button>
    </div>
  );
};

export default ProductCard;
