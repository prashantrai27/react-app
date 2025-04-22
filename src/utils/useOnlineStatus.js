import { useState } from "react";

const useOnlineStatus = () => {
  const [checkStatus, setCheckStatus] = useState(true);

  window.addEventListener("online", (e) => {
    setCheckStatus(true);
  });

  window.addEventListener("offline", () => {
    setCheckStatus(false);
  });
 return checkStatus;
};

export default useOnlineStatus;
