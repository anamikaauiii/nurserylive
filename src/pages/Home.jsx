import HeroSlider from "../components/HeroSlider";
import ProductList from "../components/ProductList";
import PromoBanners from "../components/PromoBanners";

const Home = () => {
  return (
    <>
      {/* Hero Banner */}
      <HeroSlider />
      
      {/* Promotional Banners */}
      <PromoBanners />

      {/* Products Section */}
      <ProductList />
    </>
  );
};

export default Home;
