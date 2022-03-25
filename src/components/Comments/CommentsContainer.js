import React from "react";
import { useGlobalContext } from "../../context/CommentContext";
import Comments from "./Comments";

function CommentsContainer() {
  const { commentTxt, handleSubmit, handleInputChange } = useGlobalContext();

  return (
    <section>
      <input type="text" value={commentTxt} onChange={handleInputChange} />
      <button onClick={handleSubmit}>Add</button>
      <Comments />
    </section>
  );
}

export default CommentsContainer;
