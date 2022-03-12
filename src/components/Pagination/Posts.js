import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import "./pagination.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [postsPerPage] = useState(10);
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const fetch = async function () {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    };
    fetch();
  }, []);

  const lastPostIndex = current * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = posts.slice(firstPostIndex, lastPostIndex);

  const paginate = (number) => {
    setCurrent(number);
  };

  return (
    <section className="posts">
      <h1 className="post-heading">My Posts</h1>
      {currentPost.length > 0 &&
        currentPost.map((post, idx) => {
          return <Pagination key={post.id} posts={{ ...post }} />;
        })}
      <div className="paginate-btns">
        {Array.from(
          { length: Math.ceil(posts.length / postsPerPage) },
          (_, index) => {
            return (
              <button onClick={() => paginate(index + 1)}>{index + 1}</button>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Posts;
