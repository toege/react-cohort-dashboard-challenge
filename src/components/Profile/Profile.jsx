import { useContext, useState } from "react";
import { MainContext } from "../../App";

//const init = {"firstName":"Jeanette","lastName":"Ortiz","gender":"Man","email":"Darrion.Veum90@yahoo.com","jobTitle":"Principal Factors Planner","street":"Adolfo Hollow","city":"Quinnfield","latitude":-46.7941,"longitude":-145.8468,"favouriteColour":"#90eb98","profileImage":"https://www.gravatar.com/avatar/Darrion.Veum90@yahoo.com?s=120&d=identicon","id":14}

const Profile = () => {
    const mainContext = useContext(MainContext)

    if (!mainContext.user.userName) {
        const tempUser = mainContext.user
        tempUser.userName = tempUser.firstName.slice(0, 2)+tempUser.lastName.slice(0, 2)
        mainContext.setUser(tempUser)
    }
    const [tempUser, setTempUser] = useState(mainContext.user)
    
    if (!mainContext.user) {
        return (<div>Loading...</div>)
    }


    console.log(mainContext.user)


    const handleChange = (e) => {
        e.preventDefault()

        setTempUser({...tempUser, [e.target.name]: e.target.value})
                
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        mainContext.setUser(tempUser)
                
    }

    return ( 
        <>
            <div className="profile"></div>
            <div className="profile-header">
                <div className="profile-header-text">Profile</div>
            </div>
            <div className="profile-content">
                <form className="form" onSubmit={handleSubmit}>
                    <div className="profile-category-text">Account Info</div>
                    <label>
                    First Name* <br/>
                    <input
                        name="firstName"
                        value={tempUser.firstName}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    <br/>Last Name* <br/>
                    <input
                        name="lastName"
                        value={tempUser.lastName}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    <br/>User Name* <br/>
                    <input
                        name="userName"
                        value={tempUser.userName}
                        onChange={handleChange}
                    />
                    </label>
                    <label>
                    <br/>Email* <br/>
                    <input
                        name="email"
                        value={tempUser.email}
                        onChange={handleChange}
                    />
                    </label>


                    <br/>
                    <br/>
                    <input className="form__submit" type="submit" value="Submit Survey!" />
                </form>
            </div>
            
            
        </>
     );
}
 
export default Profile;