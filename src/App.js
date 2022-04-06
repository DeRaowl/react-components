import "./App.css";
import React, { Suspense, lazy } from "react";
import ProgressBar from "./components/ProgressBar";

const App = () => {
  return (
    <main>
      <h1 style={{ margin: "1rem" }}>Progress Bar</h1>
      <ProgressBar progress={80} color="teal" />
      <ProgressBar progress={50} color="teal" />
      <ProgressBar progress={100} color="teal" />
    </main>
  );
};

export default App;
