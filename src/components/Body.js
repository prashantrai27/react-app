import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { SWIGGY_DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [restroName, setRestroName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(SWIGGY_DATA_URL); // using cors proxy to bypass cors issue
    const swiggyResponse = await data.json();
    setListOfRestaurant(
      swiggyResponse.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants
    ); // Getting live api response
    setFilteredListOfRestaurant(
      swiggyResponse.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants
    ); // Getting live api response
  };

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

  return listOfRestaurant.length === 0 ? (
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
            handleSearch;
          }}
        >
          Search
        </button>
        <button
          className="search"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (restro) => restro.info.avgRating > 4.2
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Find high rated Restraunt
        </button>
      </div>
      <div className="rest-container">
        <div className="restaurant-cards">
          {filteredListOfRestaurant.map((restraunt) => (
            <Link key={restraunt.info.id} to={"/restraunts/"+restraunt.info.id}>
            <RestrauntCard  resObj={restraunt.info} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
