import { useContext } from "react";
import UserDetailContext from "../utils/userDetailContext";
const About = () => {
    const {loggedInUser} = useContext(UserDetailContext);
  return (
    <div>
      <UserDetailContext.Provider value={{loggedInUser: 'Prince'}}>
        This is about us page and currently logged in user is {loggedInUser}
      </UserDetailContext.Provider>
    </div>
  );
};

export default About;
