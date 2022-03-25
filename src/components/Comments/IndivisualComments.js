import React, { useState } from "react";
import { useGlobalContext } from "../../context/CommentContext";

function IndivisualComments({ comment }) {
  const [showComments, setShowComments] = useState(false);
  const { deleteComment } = useGlobalContext();
  if (comment.isNested) {
    return (
      <section>
        <span>{comment.text}</span>
        <button
          onClick={() => setShowComments(!showComments)}
          style={{
            display: "block",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
        >
          {!!showComments ? "show less" : "show more"}
        </button>
        <div
          style={{ display: showComments ? "block" : "none", paddingLeft: 15 }}
        >
          {comment.nestedList?.map((com) => {
            return <IndivisualComments comment={com} />;
          })}
        </div>
      </section>
    );
  } else {
    return (
      <div>
        <span>{comment.text}</span>
        <button>reply</button>
        <button onClick={() => deleteComment(comment.id)}>delete</button>
      </div>
    );
  }
}

export default IndivisualComments;
