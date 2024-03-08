import { useContext } from "react";
import { PostContext } from "../Dashboard";
import Post from "./Post";

const Posts = () => {
    const postContext = useContext(PostContext) 
    let postObjects = null

    if (!postContext.posts) {
        return (<div>Loading...</div>)
    }

    postObjects = postContext.posts.map((post, index) => (
        <div 
            className="post"
            key={index}>
            <Post post={post}/>
        </div>
    ))

    if (!postObjects) {
        return (<div>Loading...</div>)
    }


    return ( 
        <>
            <div className="posts">
                {postObjects.reverse()}
            </div>
        </>
     );
}
 
export default Posts;