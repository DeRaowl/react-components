import React, { useContext, useReducer } from "react";
import { mockComments } from "../data/mockComments";
const CommentContext = React.createContext();

const initialState = {
  commentTxt: "",
  comments: mockComments,
};

const removeComment = (comments, id) => {
  let newList = [];
  (function remove(comments) {
    for (let index in comments) {
      if (comments[index].id >= id) {
        continue;
      } else {
        newList.push(comments[index]);
      }
    }
  })(comments);

  console.log(newList);
  return newList;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, commentTxt: action.payload };
    case "COMMENT":
      const newComment = {
        id: new Date().getTime().toString(),
        text: state.commentTxt,
        isNested: false,
      };
      return {
        ...state,
        comments: [...state.comments, newComment],
        commentTxt: "",
      };
    case "DELETE_COMMENT":
      const newList = removeComment(state.comments, action.payload);
      return { ...state, comments: newList };
    default:
      return { ...state };
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = () => {
    dispatch({ type: "COMMENT" });
    console.log(state, "hhhh");
  };

  const handleInputChange = (txt) => {
    const input = txt.target.value;
    dispatch({ type: "INPUT", payload: input });
  };

  const deleteComment = (id) => {
    dispatch({ type: "DELETE_COMMENT", payload: id });
  };

  React.useEffect(() => {
    console.log("state changed");
  }, [state]);

  return (
    <CommentContext.Provider
      value={{ ...state, handleSubmit, handleInputChange, deleteComment }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(CommentContext);
};

export default ContextProvider;
