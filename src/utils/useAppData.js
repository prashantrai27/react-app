import { useEffect, useState } from "react";
import { SWIGGY_DATA_URL } from "./constants";

const useAppData = () => {
  const [swiggyResponse, setSwiggyResponse] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_DATA_URL); // using cors proxy to bypass cors issue
    const swiggyResponse = await data.json();
    setSwiggyResponse(swiggyResponse);
  };
  return swiggyResponse;
};

export default useAppData;
