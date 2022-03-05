import React, { useContext } from "react";
import { useReducer } from "react";

const TodoContext = React.createContext();

const initialState = {
  title: "",
  todoList: [],
  isEditing: false,
  editId: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return { ...state, title: action.payload };
    case "SUBMIT":
      if (action.payload !== "" && state.isEditing) {
        const submitList = state.todoList.map((todo) => {
          if (todo.id === state.editId) {
            return { ...todo, title: state.title };
          }
          return { ...todo };
        });
        return {
          ...state,
          todoList: submitList,
          title: "",
          isEditing: false,
          editId: null,
        };
      } else if (action.payload !== "") {
        const newList = {
          id: new Date().getTime().toString(),
          title: state.title,
        };
        return { ...state, todoList: [...state.todoList, newList], title: "" };
      } else {
        break;
      }
    case "CLEAR":
      return { ...state, todoList: [] };
    case "DELETE":
      const newTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      return { ...state, todoList: newTodoList };
    case "EDIT":
      const editList = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      return {
        ...state,
        isEditing: true,
        editId: editList.id,
        title: editList.title,
      };

    default:
      return state;
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (input) => {
    dispatch({ type: "INPUT", payload: input });
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT" });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleEdit = (id) => {
    dispatch({ type: "EDIT", payload: id });
  };

  return (
    <TodoContext.Provider
      value={{
        ...state,
        handleInputChange,
        handleSubmit,
        handleDelete,
        handleClear,
        handleEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(TodoContext);
};

export default TodoProvider;
