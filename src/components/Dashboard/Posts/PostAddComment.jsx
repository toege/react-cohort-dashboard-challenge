/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MainContext } from "../../../App";
import ProfileLogo from "../../Profile/ProfileLogo";

const PostAddComment = ( { post } ) => {
    const mainContext = useContext(MainContext)
    const { id } = post 
    const initComment = {postId: id, contactId: mainContext.user.id, content:""}
    const [newComment, setNewComment] = useState(initComment);

    const handleChange = (e) => {
        e.preventDefault()
        setNewComment({...newComment, [e.target.name]: e.target.value})
    }

    const handleComment = (e) => {
        e.preventDefault()

        fetch(`https://boolean-api-server.fly.dev/toege/post/${id}/comment`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newComment)
            })
        .then(() => {
            setNewComment(initComment)
            mainContext.setUpdate(mainContext.update + 1)
        })
    }

    return ( 
        <>
            <div className="post-add-comment">
                {mainContext.user && < ProfileLogo profile={mainContext.user} small={true} />}
            </div>
            <div className="post-add-comment">
                <input 
                    className="post-add-comment-bar"
                    name="content"
                    value={newComment.content}
                    onChange={handleChange}
                />
            </div>
            <div className="post-add-comment">
                <button 
                    className="post-comment-button"
                    onClick={handleComment}>
                    Comment
                </button>
            </div>
        </>
     );
}
 
export default PostAddComment;