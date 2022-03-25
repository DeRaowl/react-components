import React from "react";
import { useGlobalContext } from "../../context/CommentContext";
import IndivisualComments from "./IndivisualComments";

function Comments() {
  const { comments } = useGlobalContext();

  return (
    <div>
      {comments.map((comment) => {
        return <IndivisualComments comment={comment} key={comment.id} />;
      })}
    </div>
  );
}

export default Comments;
