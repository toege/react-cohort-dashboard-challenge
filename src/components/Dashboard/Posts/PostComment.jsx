/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../App";
import ProfileLogo from "../../Profile/ProfileLogo";

const PostComment = ( { comment } ) => {
    const { contactId, content } = comment
    const mainContext = useContext(MainContext)
    const [commenter, setCommenter] = useState();


    useEffect(() => {
        if (mainContext.contacts) {
            setCommenter(mainContext.contacts.find(contact => contact.id === contactId))
        }
    }, []);

    if (!commenter) {
        return (<div>Loading...</div>)
    }


    return ( 
        <>
            <div className="post-comment-logo">
                    <ProfileLogo profile={commenter} small={true} />
            </div>
            <div className="post-comment-content">
                <div className="post-comment-name">
                {commenter.firstName}{" "}{commenter.lastName}
                </div>
                <div className="post-comment-text">
                    {content}
                </div>
            </div>
        </>
     );
}
 
export default PostComment;