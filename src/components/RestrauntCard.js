import { CDN_URL } from "../utils/constants";

const RestrauntCard = (ListOfObj) => {
  const { name, cuisines, avgRating, cloudinaryImageId, sla } =
    ListOfObj.resObj;
  return (
    <div className="w-56 p-2 m-2 shadow-black-100 shadow-xl bg-blue-100">
      <img className="h-56 w-100" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};


export default RestrauntCard;
