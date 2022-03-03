import React, { useState } from "react";
import { data } from "./data";
import "./Carousel.css";

function Carousel() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? data.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === data.length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }
  return (
    <section className="carousel-wrapper">
      <button className="prev-btn" onClick={handlePrev}>
        Prev
      </button>
      <button className="next-btn" onClick={handleNext}>
        Next
      </button>
      {data.map((el, index) => {
        return (
          <div
            key={el.id}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && <img src={el.img} alt={el.img} />}
          </div>
        );
      })}
    </section>
  );
}

export default Carousel;
