/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import PostAddComment from "./PostAddComment";
import PostComment from "./PostComment";
import { MainContext } from "../../../App";

const PostComments = ( {post} ) => {
    const mainContext = useContext(MainContext)
    const [comments, setComments] = useState();
    const { id } = post
    const [reduce, setReduce] = useState(true);
    let displayedComments = null

    const handleShowAll = (e) => {
        e.preventDefault()
        setReduce(!reduce)
    }

    useEffect(() => {
        fetch(`https://boolean-api-server.fly.dev/toege/post/${id}/comment`)
        .then(response => response.json())
        .then(setComments)        
    }, [mainContext.update]);

    if (comments && reduce) {


        displayedComments = comments.slice(-3).map((comment, index) => (
            < PostComment comment={comment} key={index}/>
        ))
    }
    else if (comments) {
        displayedComments = comments.map((comment, index) => (
            < PostComment comment={comment} key={index}/>
        ))
    }


    return ( 
        <>
            <div>
                <div 
                    className="show-comments"
                    onClick={handleShowAll}>
                    {(reduce && comments && (comments.length > 3) ) && "See previous comments"}
                    {!reduce && "Hide previous comments"}
                </div>
                {displayedComments}
            </div>
            <div>
                <PostAddComment post={post}/>
                
            </div>
        </>
     );
}
 
export { PostComments };
