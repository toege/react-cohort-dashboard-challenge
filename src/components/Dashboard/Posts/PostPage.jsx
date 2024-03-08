/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../../App";
import ProfileLogo from "../../Profile/ProfileLogo";
import { PostComments } from "./PostComments";
import { Link, useParams } from "react-router-dom";

const PostPage = () => {
    const { id } = useParams()
    const [post, setPost] = useState();
    const mainContext = useContext(MainContext)

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/toege/post/${id}`)
        .then(response => response.json())
        .then(setPost)
    }, []);
    
    if (!post) {
        return (<div>Loading...</div>)
    }
    const { title, content } = post
    
    
    return ( 
        <>
        <div className="post-page">
                <div className="post-header">
                        <ProfileLogo profile={mainContext.contacts[post.contactId-1]} small={false} />
                </div>
                <div className="post-header">
                    {mainContext.contacts[post.contactId-1].firstName}{" "}{mainContext.contacts[post.contactId-1].lastName}<br/>
                    <Link to={`/post/${id}`}>
                        {title}
                    </Link>
                </div>
                <div className="post-content">
                    {content}
                </div>
                <div >
                    <PostComments post={post} />
                </div>
        </div>
        </>
     );
}
 
export default PostPage;