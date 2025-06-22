import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.card.info.id} className="m-2 p-2 border-b-1 flex justify-between">
            <div className="w-9/12 pr-1">
              <span className="font-semibold">{item.card.info.name} - </span>
              <span className="font-semibold">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs text-gray-600">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-3/12">
              <img src={CDN_URL + item.card.info.imageId}></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
