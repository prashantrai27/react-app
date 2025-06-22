import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userDetailContext from "../utils/userDetailContext";

const Header = () => {
  const [loginLogoutBtn, setLoginLogoutBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-blue-200 shadow-2xl">
      <div className="logo-container">
        <img className="h-28 px-2" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">Status: {onlineStatus ? '✅': '❌'}</li>
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About</Link></li>
          <li className="px-2"><Link to="/contact">Contact</Link></li>
          <li className="px-2">Cart</li>
          <li className="px-2">
            <button
              onClick={() => {
                loginLogoutBtn !== "Login"
                  ? setLoginLogoutBtn("Login")
                  : setLoginLogoutBtn("Logout");
              }}
            >
              {loginLogoutBtn}
            </button>
          </li>
          <li>
            User: <userDetailContext.Consumer>{(data=>data.loggedInUser)}</userDetailContext.Consumer>
           {/* like this we can use context in react component. */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
