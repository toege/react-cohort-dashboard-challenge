/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { MainContext } from "../../../App";
import ProfileLogo from "../../Profile/ProfileLogo";

const initComment = {contactId:14, content:"", id: 0}

const PostAddComment = ( { post } ) => {
    const mainContext = useContext(MainContext)
    const [newComment, setNewComment] = useState(initComment);

    const handleChange = (e) => {
        e.preventDefault()
        setNewComment({...newComment, [e.target.name]: e.target.value})
    }

    const handleComment = (e) => {
        e.preventDefault()

        const newPost = post
        const id = newPost.id

        if (newPost.comments) {
            newPost.comments = [...newPost.comments, newComment]
        }
        else {
            setNewComment({...newComment, id: 1})
            console.log(newComment)
            newPost.comments = [newComment]  
            console.log(newPost)
        }

        fetch(`https://boolean-api-server.fly.dev/toege/post/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
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