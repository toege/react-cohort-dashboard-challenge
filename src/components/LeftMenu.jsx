import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../App";

const LeftMenu = () => {
    const navigator = useNavigate()
    const mainContext = useContext(MainContext)


    const handleHome = (e) => {
        e.preventDefault()
        mainContext.setIsHome(true)
        navigator("/")
    }

    const handleProfile = (e) => {
        e.preventDefault()
        mainContext.setIsHome(false)
        navigator(`/profile/${mainContext.user.id}`)
    }


    return ( 
        <>
            <div className="menu"></div>
            <div className={mainContext.isHome ? "mark-home-icon": "mark-profile-icon"}></div>
            <div className="home-icon">
                <img    src="src\assets\home-icon.svg" onClick={handleHome}/>
                <div className="icon-text" onClick={handleHome}>Home </div>
            </div>
            <div className="profile-icon">
                <img src="src\assets\profile-icon.svg" onClick={handleProfile}/>
                <div className="icon-text" onClick={handleProfile}>Profile</div>
            </div>

        </>
     );
}
 
export default LeftMenu;