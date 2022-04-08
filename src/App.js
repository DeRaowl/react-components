import "./App.css";
import React, { Suspense, lazy } from "react";
import { data as accordianData } from "./utilities/accordianData";
import ProgressBar from "./components/ProgressBar";
import Accordian from "./components/Accordian";

const App = () => {
  return (
    <main>
      {/* <h1 style={{ margin: "1rem" }}>ProgressBar</h1> */}
      {/* <ProgressBar progress={80} color="tomato" /> */}
      <h1 style={{ margin: "1rem" }}>Accordian</h1>
      <Accordian data={accordianData} />
    </main>
  );
};

export default App;
