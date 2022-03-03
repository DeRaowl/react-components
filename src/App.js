import "./App.css";
import React from "react";
import { data } from "./components/Accordian/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordian from "./components/Accordian/Accordian";
import Timer from "./components/Stop/Timer";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [accordianData, setAccordianData] = React.useState(data);
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route
            path="/accordian"
            element={<Accordian data={accordianData} />}
          />
          <Route path="/timer" element={<Timer start={0} end={30} />} />
          <Route path="/carousel" element={<Carousel />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
