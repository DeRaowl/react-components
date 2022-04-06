import React, { useState } from "react";
import "./index.css";

function ProgressBar({ className, size, progress, color }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    setStyle({
      width: `${progress}%`,
      opacity: 1,
      backgroundColor: `${color}`,
    });
  }, 1000);

  return (
    <section className="progress">
      <section className="progress-bar" style={style}></section>
    </section>
  );
}

export default ProgressBar;
