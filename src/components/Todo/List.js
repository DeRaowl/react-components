import React from "react";
const useGlobalContext = React.lazy(() => import("./context/TodoContext"));

function List({ id, title }) {
  const { handleDelete, handleEdit } = useGlobalContext();
  return (
    <section>
      <div className="lists">
        <p className="title">{title}</p>
        <div className="btn-container">
          <button onClick={() => handleEdit(id)}>Edit</button>
          <button onClick={() => handleDelete(id)}>Delete</button>
        </div>
      </div>
    </section>
  );
}

export default List;
