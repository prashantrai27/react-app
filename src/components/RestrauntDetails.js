import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntDetails from "../utils/useRestrauntDetails";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestrauntCard = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const restroMenu = useRestrauntDetails(resId);
  if (restroMenu === null) return <Shimmer />;
  const { name, cuisines, avgRatingString } =
    restroMenu?.data?.cards[2]?.card?.card?.info;
  const categories =
    restroMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center">
      <div className="">
        <h1 className="font-bold my-4 text-2xl">{name}</h1>
        <div className="font-bold">
          {cuisines.join(", ")} | Rating: {avgRatingString}
        </div>
      </div>
      <div className="item-list">
        {categories.map((category,index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true:false}
            setShowIndex={()=> setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestrauntCard;
