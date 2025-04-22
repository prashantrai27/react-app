import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntDetails from "../utils/useRestrauntDetails";

const RestrauntCard = () => {
  const { resId } = useParams();

  const restroMenu = useRestrauntDetails(resId);

  if (restroMenu === null) return <Shimmer />;
  const { name, cuisines, avgRatingString } =
    restroMenu?.data?.cards[2]?.card?.card?.info;
  const foodItems =
    restroMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;
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

        {foodItems ? (
          foodItems.map((item) => {
            return (
              <div key={item.card.info.id} className="item-info">
                <div>{item.card.info.name}</div>
                <div>₹ {item.card.info.price ? item.card.info.price: 'NA'}</div>
              </div>
            );
          })
        ) : (
          <div>No Service Available!!!</div>
        )}
      </div>
    </div>
  );
};

export default RestrauntCard;
