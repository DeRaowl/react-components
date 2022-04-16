import "./App.css";
import React, { Suspense, lazy } from "react";
import { data as accordianData } from "./utilities/accordianData";
import { images as lazyImages } from "./utilities/images";
// import ProgressBar from "./components/ProgressBar";
// import Accordian from "./components/Accordian";

const ProgressBar = lazy(() => import("./components/ProgressBar"));
const Accordian = lazy(() => import("./components/Accordian"));
const LazyLoading = lazy(() => import("./components/LazyLoading"));

const App = () => {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <h1 style={{ margin: "1rem" }}>ProgressBar</h1>
        <ProgressBar progress={80} color="tomato" />
        <h1 style={{ margin: "1rem" }}>Accordian</h1>
        <Accordian data={accordianData} />
        <h1 style={{ margin: "1rem" }}>Lazy Loading</h1>
        <LazyLoading images={lazyImages} />
      </Suspense>
    </main>
  );
};

export default App;
