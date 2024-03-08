import { createContext, useContext, useEffect, useState } from "react";
import PostBar from "./PostBar";
import Posts from "./Posts/Posts";
import { MainContext } from "../../App";

const PostContext = createContext()

const Dashboard = () => {
    const [posts, setPosts] = useState();
    const mainContext = useContext(MainContext)
    
    
    useEffect(() => {
        fetch("https://boolean-api-server.fly.dev/toege/post")
        .then(response => response.json())
        .then(setPosts)        
    }, [mainContext.update]);


    if (!posts ) {
        return (<div>Loading...</div>)
    }

    return ( 
        <>
            <PostContext.Provider value = { { posts: posts, setPosts: setPosts } } >
                <div className="dashboard">
                </div>
                < PostBar />
                < Posts />
            </PostContext.Provider>
        </>
     );
}
 
export { Dashboard, PostContext };