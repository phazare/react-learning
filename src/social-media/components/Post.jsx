import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <>
      <div className="card w-50 m-5">
        <div className="">
          <MdDelete
            className="float-end fs-5 m-2 cursor-pointer position-absolute right-0"
            onClick={() => deletePost(post.id)}
          ></MdDelete>
        </div>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-info m-1">
              #{tag}
            </span>
          ))}
          <div className="alert alert-primary m-0 mt-2 p-2" role="alert">
            {post.reactions.likes} people like this post !
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
