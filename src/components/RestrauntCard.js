import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import userDetailContext from "../utils/userDetailContext";

const RestrauntCard = (ListOfObj) => {
  const { name, cuisines, avgRating, cloudinaryImageId, sla } =
    ListOfObj.resObj;

    const {loggedInUser} = useContext(userDetailContext);
  
    return (
    <div className="w-56 min-h-110 p-2 m-2 shadow-black-100 shadow-xl bg-blue-100">
      <img className="h-56 w-100" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
      <h4 className="font-bold">User: {loggedInUser}</h4>
    </div>
  );
};

export const RestrauntCardPromoted = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <div className="absolute bg-black text-white ml-1.5 p-1 rounded-lg">
          Veg
        </div>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
