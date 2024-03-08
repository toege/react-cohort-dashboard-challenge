/* eslint-disable react/prop-types */
const ProfileLogo = ( { profile, small }) => {

    const { favouriteColour } = profile

    return (  
        <div className={small ? "profile-logo-small" : "profile-logo"} 
            style={{backgroundColor: favouriteColour}}>
            
            <h3>{`${profile.firstName[0]}${profile.lastName[0]}`}</h3>
        </div>
    );
}
 
export default ProfileLogo;