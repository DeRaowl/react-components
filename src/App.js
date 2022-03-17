import "./App.css";
import React, { Suspense, lazy } from "react";
import { data } from "./components/Accordian/data";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
// import Accordian from "./components/Accordian/Accordian";
// import Timer from "./components/Stop/Timer";
// import Carousel from "./components/Carousel/Carousel";
import TodoProvider from "./components/Todo/context/TodoContext";
// import Todo from "./components/Todo/Todo";
// import Posts from "./components/Pagination/Posts";

const Accordian = lazy(() => import("./components/Accordian/Accordian"));
const Timer = lazy(() => import("./components/Stop/Timer"));
const Carousel = lazy(() => import("./components/Carousel/Carousel"));
const Todo = lazy(() => import("./components/Todo/Todo"));
const Posts = lazy(() => import("./components/Pagination/Posts"));

function App() {
  const [accordianData] = React.useState(data);
  return (
    <TodoProvider>
      <main>
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <NavLink to="/accordian">Accordian</NavLink>
              </li>
              <li>
                <NavLink to="/todo">Todo</NavLink>
              </li>
              <li>
                <NavLink to="/carousel">Carousel</NavLink>
              </li>
              <li>
                <NavLink to="/posts">Pagination</NavLink>
              </li>
            </ul>
          </nav>
          <Suspense fallback={<div>Loading....</div>}>
            <Routes>
              <Route
                path="/accordian"
                element={<Accordian data={accordianData} />}
              />
              <Route path="/timer" element={<Timer start={0} end={30} />} />
              <Route path="/carousel" element={<Carousel />} />
              <Route path="/todo" element={<Todo />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </main>
    </TodoProvider>
  );
}

export default App;
