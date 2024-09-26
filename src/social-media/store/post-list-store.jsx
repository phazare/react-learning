import { createContext, useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const PostListContext = createContext({
  posts: [],
  loaderState: false,
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currValue, action) => {
  let newPostValue = currValue;
  if (action.type === "ADD_POST") {
    newPostValue = [action.payload.data, ...currValue];
  } else if (action.type === "DELETE_POST") {
    newPostValue = currValue.filter((x) => x.id !== action.payload.id);
  } else if (action.type === "GET_ALL_POSTS") {
    newPostValue = action.payload.data;
  }
  return newPostValue;
};

const PostListProvider = ({ children }) => {
  const [posts, dispatchPost] = useReducer(postListReducer, DEFAULT_POST_LIST);
  const [loaderState, setLoaderState] = useState(false);
  const navigate = useNavigate();

  const addPost = (post) => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        dispatchPost({
          type: "ADD_POST",
          payload: {
            data: res,
          },
        });
        navigate("posts")
      });
  };

  const deletePost = (id) => {
    dispatchPost({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  const getAllPosts = (data) => {
    dispatchPost({
      type: "GET_ALL_POSTS",
      payload: { data },
    });
  };

  useEffect(() => {
    setLoaderState(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res) => {
        getAllPosts(res.posts);
        setLoaderState(false);
      });
  }, []);

  return (
    <PostListContext.Provider
      value={{
        posts,
        loaderState,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Learning React",
    body: "I'm enjoying learning react a lot and trying to create a project simultaneously",
    reactions: 4,
    tags: ["learning", "technology"],
    userId: "user3",
  },
  {
    id: 2,
    title: "Winter is coming",
    body: "Everyone likes winter so do I. I go for vacation in winter and roam around the world.",
    reactions: 17,
    tags: ["vacation", "winter", "roam"],
    userId: "user8",
  },
];
export default PostListProvider;
