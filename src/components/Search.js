import restrauntList from "../utils/mockData";
import { useState } from "react";

const Search = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restrauntList);

  return (
    <div>
      <button
        onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (restro) => restro.info.avgRating > 4
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
