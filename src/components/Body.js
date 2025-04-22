import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAppData from "../utils/useAppData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const swiggyResponse = useAppData();

  useEffect(()=>{
    if(swiggyResponse.data) {
      setListOfRestaurant(
        swiggyResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
      ); // Getting live api response
      setFilteredListOfRestaurant(
        swiggyResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          .restaurants
      ); // Getting live api response
    }
  },[swiggyResponse.data])
  
  const onlineStatus = useOnlineStatus();

  const [restroName, setRestroName] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurant.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(restroName);
    });
    setFilteredListOfRestaurant(filteredList);
  };

  if (onlineStatus !== true)
    return (
      <h2 className="body-container">Opps!!! Looks like you are offline.</h2>
    );

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-bar">
        <input
          type="text"
          className="search"
          value={restroName}
          onChange={(e) => setRestroName(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>
        <button
          className="search"
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
        <button
          className="search"
          onClick={() => {
            const filteredList = filteredListOfRestaurant.filter(
              (restro) => restro.info.avgRating > 4.2
            );
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          Find high rated Restraunt
        </button>
      </div>
      <div className="rest-container">
        <div className="restaurant-cards">
          {filteredListOfRestaurant.map((restraunt) => (
            <Link
              key={restraunt.info.id}
              to={"/restraunts/" + restraunt.info.id}
            >
              <RestrauntCard resObj={restraunt.info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
