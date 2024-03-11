import { useContext } from "react";
import "../App.css";
import { MainContext } from "../App";
import ProfileLogo from "./Profile/ProfileLogo";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const mainContext = useContext(MainContext);
  const navigator = useNavigate();

  const handleHome = (e) => {
    e.preventDefault();
    mainContext.setIsHome(true);
    navigator("/");
  };

  return (
    <>
      <header className="header"></header>

      <div className="header-left-element" onClick={handleHome}>
        <img src="src\assets\logo.svg" />
      </div>

      <div className="header-right-element">
        {mainContext.user && <ProfileLogo profile={mainContext.user} small={false}/>}
      </div>
    </>
  );
};

export default Header;
