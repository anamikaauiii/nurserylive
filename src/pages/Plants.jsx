import products from "../data/products";
import ProductCard from "../components/ProductCard";
import "./Plants.css";

const Plants = () => {
  return (
    <section className="plants-section">
      <h1 className="plants-title">Plants</h1>

      <div className="plants-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default Plants;
