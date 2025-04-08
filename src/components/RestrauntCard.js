import { CDN_URL } from "../utils/constants";

const RestrauntCard = (ListOfObj) => {
  const { name, cuisines, avgRating, cloudinaryImageId, deliveryTime } =
    ListOfObj.resObj;
  return (
    <div className="rest-card">
      <img className="food-img" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestrauntCard;
