import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import NoPosts from "./NoPosts";
import Loader from "./Loader";
import { PostListContext } from "../store/post-list-store";
const PostList = () => {
  const { loaderState } = useContext(PostListContext);
  
  const { posts } = useContext(PostListContext);

  console.log("posts =",posts)
  return (
    <>
      {loaderState && <Loader />}
      {!loaderState && posts.length === 0 && <NoPosts />}

      {!loaderState && posts.length > 0 &&
        posts.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
