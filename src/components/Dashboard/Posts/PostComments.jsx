/* eslint-disable react/prop-types */
import PostAddComment from "./PostAddComment";
import PostComment from "./PostComment";

const PostComments = ( {post} ) => {

    return ( 
        <>
            <div>
                
                {post.comment && post.comment.map((comment, index) => (
                    < PostComment comment={comment} key={index}/>
                    ))}
                {post.comment && console.log(post)}
            </div>
            <div>
                <PostAddComment post={post}/>
                
            </div>
        </>

     );
}
 
export default PostComments;


/* 

- legg til id i comments
- fiks display av commmentarer
- fiks navm og bruker logoer en enda ikke i reversert rekkefølge


*/