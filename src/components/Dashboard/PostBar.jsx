import { useContext, useState } from "react";
import ProfileLogo from "../Profile/ProfileLogo";
import { MainContext } from "../../App";

const initPost = {contactId:14, title: "Post", content:""}

const PostBar = () => {
    const mainContext = useContext(MainContext)
    const [newPost, setNewPost] = useState(initPost);

    const handleChange = (e) => {
        e.preventDefault()
        setNewPost({...newPost, [e.target.name]: e.target.value})
    }

    const handlePost = (e) => {
        e.preventDefault()

        fetch('https://boolean-api-server.fly.dev/toege/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
            })
        .then(() => {
            setNewPost(initPost)
            mainContext.setUpdate(mainContext.update + 1)
        })
    }

    return ( 
        <>
            <div className="post-bar"></div>
            <div className="post-bar-logo">
                {mainContext.user && <ProfileLogo profile={mainContext.user} small={true} />}
            </div>
            <div className="post-bar-bar">
                <input 
                    className="post-bar-style"
                    name="content"
                    value={newPost.content}
                    onChange={handleChange}
                />
            </div>
            <div className="post-bar-button">
                <button 
                    className="post-button"
                    onClick={handlePost}>Post</button>
            </div>
        </>
     );
}
 
export default PostBar;