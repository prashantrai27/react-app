import { useEffect, useState } from "react";
import { SWIGGY_RESTRO_MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestrauntCard = () => {
  const [restroMenu, setRestroMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_RESTRO_MENU_URL + resId);
    const restroMenu = await data.json();
    setRestroMenu(restroMenu);
  };
  if (restroMenu === null) return <Shimmer />;
  console.log("infor", restroMenu);
  const { name, cuisines, avgRatingString } =
    restroMenu?.data?.cards[2]?.card?.card?.info;
  const foodItems =
    restroMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  console.log(foodItems, "items");
  return (
    <div className="item-container">
      <div className="item-header">
        <h1>{name}</h1>
        <div className="flex-class">
          <h3>{cuisines.join(", ")}</h3>
          <h3>Rating: {avgRatingString}</h3>
        </div>
      </div>
      <div className="item-list">
        <h2 className="item-heading">Items</h2>

        {foodItems.map((item) => {
          return (
            <div key={item.card.info.id} className="item-info">
              <container>{item.card.info.name}</container>
              <container>₹ {item.card.info.price}</container>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestrauntCard;
