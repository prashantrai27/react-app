import { useEffect, useState } from "react";
import { SWIGGY_RESTRO_MENU_URL } from "./constants";

const useRestrauntDetails = (resId) => {
  const [restroMenu, setRestroMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(SWIGGY_RESTRO_MENU_URL + resId);
    const restroMenu = await data.json();
    setRestroMenu(restroMenu);
  };
  return restroMenu;
};

export default useRestrauntDetails;
