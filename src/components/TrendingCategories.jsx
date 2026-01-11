import "./TrendingCategories.css";
import { useNavigate } from "react-router-dom";

const trendingData = [
  {
    title: "Bonsai Plants - Upto 25% Off",
    image: "/trending/bonsai.jpg",
    link: "/plants",
  },
  {
    title: "Ceramic Planters - Starting ₹299",
    image: "/trending/ceramic.jpg",
    link: "/planters",
  },
  {
    title: "Kokedama - Starting ₹249",
    image: "/plants/kokedama.jpg",
    link: "/plants",
  },
  {
    title: "Month Wise Gardening - Upto 65% Off",
    image: "/trending/monthly.jpg",
    link: "/plants",
  },
];

const TrendingCategories = () => {
  const navigate = useNavigate();

  return (
    <section className="trending-section">
      <h2 className="trending-heading">Trending</h2>

      <div className="trending-row">
        {trendingData.map((item, index) => (
          <div
            key={index}
            className="trending-item"
            onClick={() => navigate(item.link)}
          >
            <div className="trending-image">
              <img src={item.image} alt={item.title} />
            </div>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
