import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const title = useRef();
  const userId = useRef();
  const body = useRef();
  const reactions = useRef();
  const tags = useRef();

  const submitDetails = (event) => {
    event.preventDefault();
    const data = {
      title: title.current.value,
      userId: userId.current.value,
      body: body.current.value,
      reactions: { likes: reactions.current.value },
      tags: tags.current.value.split(" "),
    };
    addPost(data);
    title.current.value = "";
    body.current.value = "";
    reactions.current.value = "";
    tags.current.value = "";
    userId.current.value = "";
  };

  return (
    <form className="m-5" onSubmit={submitDetails}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your user id"
          id="userId"
          ref={userId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">
          Post title
        </label>
        <input
          type="text"
          placeholder="Enter the title"
          className="form-control"
          id="postTitle"
          ref={title}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">
          Post details
        </label>
        <textarea
          type="text"
          row="4"
          placeholder="Enter what's in your mind"
          className="form-control"
          id="postBody"
          ref={body}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="postReactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          placeholder="Number of reactions post received"
          className="form-control"
          id="postReactions"
          ref={reactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hashTags" className="form-label">
          Hash tags
        </label>
        <input
          type="text"
          placeholder="Enter has tags for your post"
          className="form-control"
          id="hashTags"
          ref={tags}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
