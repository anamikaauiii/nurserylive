import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "./HeroSlider.css";

const HeroSlider = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="/hero/hero1.png"
            alt="hero1"
            onClick={() =>
              navigate("/collections/balcony-and-terrace-garden")
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/hero/hero2.png"
            alt="hero2"
            onClick={() => navigate("/plants")}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/hero/hero3.png"
            alt="hero3"
            onClick={() => navigate("/seeds")}
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/hero/hero4.png"
            alt="hero4"
            onClick={() => navigate("/gifts")}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
