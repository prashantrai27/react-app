import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import restrauntList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restrauntList);

  return (
    <div className="body-container">
      <button
        className="search"
        onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (restro) => restro.info.avgRating > 4
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Search
      </button>
      <div className="rest-container">
        <div className="restaurant-cards">
          {listOfRestaurant.map((restraunt) => (
            <RestrauntCard key={restraunt.info.id} resObj={restraunt.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
