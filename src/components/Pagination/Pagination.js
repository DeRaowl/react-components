import React from "react";

function Pagination(post) {
  const { title, body } = post.posts;
  return (
    <ul className="post-lists">
      <li className="post-list">
        <h3>{title}</h3>
        <p>{body}</p>
      </li>
    </ul>
  );
}

export default Pagination;
