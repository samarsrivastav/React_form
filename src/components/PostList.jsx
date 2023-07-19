import Post from "./Post";
import { useLoaderData } from "react-router-dom";
import classes from "./PostList.module.css";
function PostList() {
   const posts=useLoaderData();
   
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.post}>
          {posts.map((post) => (
            <Post author={post.author} id={post.id} body={post.body} key={post.id} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ color: "white", textAlign: "center" }}>
          <h1>No Post</h1>
        </div>
      )}
    </>
  );
}
export default PostList;
