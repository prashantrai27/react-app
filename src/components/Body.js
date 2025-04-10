import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);

  const [restroName, setRestroName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5713497&lng=73.91981609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurant.filter((restaurant) => {
      return restaurant.info.name.toLowerCase().includes(restroName);
    });
    setFilteredListOfRestaurant(filteredList);
  }

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
          onClick={() => {handleSearch}}
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
            <RestrauntCard key={restraunt.info.id} resObj={restraunt.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
