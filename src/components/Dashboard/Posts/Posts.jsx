import { useContext, useEffect, useState } from "react";
import { PostContext } from "../Dashboard";
import Post from "./Post";

const Posts = () => {
    const postContext = useContext(PostContext) 
    const [revPosts, setRevPosts] = useState();

    useEffect(() => {
        setRevPosts([...postContext.posts.reverse()])
    }, [postContext.posts]);

    if (!revPosts) {
        return (<div>Loading...</div>)
      }

    return ( 
        <>
            <div className="posts">
                {revPosts.map((post, index) => (
                    <div 
                        className="post"
                        key={index}>
                        <Post post={post}/>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Posts;