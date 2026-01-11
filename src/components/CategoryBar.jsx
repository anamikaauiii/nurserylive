import "./CategoryBar.css";

// images from assets
import offers from "../assets/categories/offers.jpg";
import gardening from "../assets/categories/gardening.jpg";
import plants from "../assets/categories/plants.jpg";
import seeds from "../assets/categories/seeds.jpg";
import bulbs from "../assets/categories/bulbs.jpg";
import pots from "../assets/categories/pots.jpg";
import fertilizers from "../assets/categories/fertilizers.jpg";
import corporate from "../assets/categories/corporate.jpg";
import pebbles from "../assets/categories/pebbles.jpg";
import accessories from "../assets/categories/accessories.jpg";

const categories = [
  { name: "OFFERS", img: offers },
  { name: "GARDENING", img: gardening },
  { name: "PLANTS", img: plants },
  { name: "SEEDS", img: seeds },
  { name: "BULBS", img: bulbs },
  { name: "POTS", img: pots },
  { name: "FERTILIZERS", img: fertilizers },
  { name: "CORPORATE", img: corporate },
  { name: "PEBBLES", img: pebbles },
  { name: "ACCESSORIES", img: accessories },
];

export default function CategoryBar() {
  return (
    <div className="category-bar">
      {categories.map((item) => (
        <div className="category-item" key={item.name}>
          <div className="category-img">
            <img src={item.img} alt={item.name} />
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
