import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // changing the state of parent
  }
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between px-3 cursor-pointer" onClick={handleClick}>
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      
       { showItems && <ItemList className="text-left" key={data.title} items={data.itemCards} />}
      
    </div>
  );
};

export default RestaurantCategory;
