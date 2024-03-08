/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import PostAddComment from "./PostAddComment";
import PostComment from "./PostComment";
import { MainContext } from "../../../App";

const CommentContext = createContext()

const PostComments = ( {post} ) => {
    const mainContext = useContext(MainContext)
    const [comments, setComments] = useState();
    const { id } = post

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/toege/post/${id}/comment`)
        .then(response => response.json())
        .then(setComments)        
    }, [mainContext.update]);

    {comments && comments.map((comment, index) => (
        < PostComment comment={comment} key={index}/>
        ))}

    return ( 
        <>
        < CommentContext.Provider value = { {  } } >
            <div>
                
                {comments && comments.map((comment, index) => (
                    < PostComment comment={comment} key={index}/>
                    ))}
            </div>
            <div>
                <PostAddComment post={post}/>
                
            </div>
        </CommentContext.Provider>
        </>
     );
}
 
export { PostComments, CommentContext };
