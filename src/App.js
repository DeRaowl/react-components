import "./App.css";
import React from "react";
import { data } from "./components/Accordian/data";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Accordian from "./components/Accordian/Accordian";
import Timer from "./components/Stop/Timer";
import Carousel from "./components/Carousel/Carousel";
import TodoProvider from "./components/Todo/context/TodoContext";
import Todo from "./components/Todo/Todo";

function App() {
  const [accordianData, setAccordianData] = React.useState(data);
  return (
    <TodoProvider>
      <main>
        <BrowserRouter>
          <Routes>
            <Route
              path="/accordian"
              element={<Accordian data={accordianData} />}
            />
            <Route path="/timer" element={<Timer start={0} end={30} />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/todo" element={<Todo />} />
          </Routes>
        </BrowserRouter>
      </main>
    </TodoProvider>
  );
}

export default App;
