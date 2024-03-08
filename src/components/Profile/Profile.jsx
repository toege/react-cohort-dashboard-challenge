import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../App";
import { useParams } from "react-router-dom";


const Profile = () => {
    const mainContext = useContext(MainContext)
    const [profile, setProfile] = useState();
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/toege/contact/${id}`)
        .then(response => response.json())
        .then(setProfile)
    }, []);
    
    const handleChange = (e) => {
        e.preventDefault()
        setProfile({...profile, [e.target.name]: e.target.value})
    }
        
    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch(`https://boolean-api-server.fly.dev/toege/contact/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profile)
        })
        .then(() => {
            mainContext.setUpdate(mainContext.update + 1)
        })
            
    }

        if (!profile) {
            return (<div>Loading...</div>)
        }

        return ( 
            <>
            <div className="profile"></div>
            <div className="profile-header">
                <div className="profile-header-text">Profile</div>
            </div>
            <div className="profile-content">       
                <form className="form" onSubmit={handleSubmit}>
                    <div className="profile-content-left">
                            <div className="profile-category-text">Account Info</div>
                            <label
                                className="profile-sub-text">
                            First Name* <br/>
                            <input
                                className="profile-inputs"
                                name="firstName"
                                value={profile.firstName}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            Last Name* <br/>
                            <input
                                className="profile-inputs"
                                name="lastName"
                                value={profile.lastName}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            User Name* <br/>
                            <input
                                className="profile-inputs"
                                name="userName"
                                value={profile.userName}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            Email* <br/>
                            <input
                                className="profile-inputs"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <div className="profile-category-text">Contact info</div>
                            <label
                                className="profile-sub-text">
                            Phone* <br/>
                            <input
                                className="profile-inputs"
                                name="phone"
                                value={profile.phone && profile.phone}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            Web Page <br/>
                            <input
                                className="profile-inputs"
                                name="p"
                                value={profile.webPage && profile.webPage}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            *Required 
                    </div>
                    
                    <div className="profile-content-right">
                            <div className="profile-category-text">Address</div>
                            <label
                                className="profile-sub-text">
                            Street <br/>
                            <input
                                className="profile-inputs"
                                name="street"
                                value={profile.street && profile.street}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            Suite <br/>
                            <input
                                className="profile-inputs"
                                name="suite"
                                value={profile.suite && profile.suite}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            City <br/>
                            <input
                                className="profile-inputs"
                                name="city"
                                value={profile.city && profile.city}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            Zip-Code* <br/>
                            <input
                                className="profile-inputs"
                                name="zipcode"
                                value={profile.zipcode && profile.zipcode}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <div className="profile-category-text">Company Info</div>
                            <label
                                className="profile-sub-text">
                            Name <br/>
                            <input
                                className="profile-inputs"
                                name="companyName"
                                value={profile.companyName && profile.companyName}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            Catch Phrase <br/>
                            <input
                                className="profile-inputs"
                                name="catchPhrase"
                                value={profile.catchPhrase && profile.catchPhrase}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            Business Statement <br/>
                            <input
                                className="profile-inputs"
                                name="bStatement"
                                value={profile.bStatement && profile.bStatement}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                            <label
                                className="profile-sub-text">
                            Zip-Code* <br/>
                            <input
                                className="profile-inputs"
                                name="zipcode"
                                value={profile.zipcode && profile.zipcode}
                                onChange={handleChange}
                            />
                            </label>
                            <br/>
                            <br/>
                    </div>
                <input className="form__submit" type="submit" value="Submit Survey!" />
                </form>
            </div>
            
            
        </>
     );
}
 
export default Profile;