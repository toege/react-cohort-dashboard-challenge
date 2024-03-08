/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../App";
import ProfileLogo from "../../Profile/ProfileLogo";
import { PostComments } from "./PostComments";

const Post = ( { post } ) => {
    const { title, contactId, content, id } = post
    const mainContext = useContext(MainContext)
    const [poster, setPoster] = useState();


    useEffect(() => {
        if (mainContext.contacts) {
            setPoster(mainContext.contacts[contactId-1])
        }
    }, []);

    if (!poster) {
        return (<div>Loading...</div>)
    }
    
    return ( 
        <>
            <div className="post-header">
                    <ProfileLogo profile={poster} small={true} />
            </div>
            <div className="post-header">
                {poster.firstName}{" "}{poster.lastName}<br/>
                {title}
            </div>
            <div className="post-content">
                {content}
            </div>
            <div >
                <PostComments post={post} />
            </div>
        </>
     );
}
 
export default Post;