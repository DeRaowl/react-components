import React from "react";
import Images from "./Images";
import "./index.css";

function LazyImage({ images }) {
  return (
    <div>
      {images.map((image, idx) => {
        return <Images key={idx} image={image} styleClass="lazy-img" />;
      })}
    </div>
  );
}

export default LazyImage;
