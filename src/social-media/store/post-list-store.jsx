import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  posts: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currValue, action) => {
  let newPostValue = currValue;
  if (action.type === "ADD_POST") {
    newPostValue = [action.payload.data, ...currValue];
  } else if (action.type === "DELETE_POST") {
    newPostValue = currValue.filter((x) => x.id !== action.payload.id);
  }
  return newPostValue;
};

const PostListProvider = ({ children }) => {
  const [posts, dispatchPost] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (data) => {
    dispatchPost({
      type: "ADD_POST",
      payload: {
        data,
      },
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

  return (
    <PostListContext.Provider
      value={{
        posts,
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
