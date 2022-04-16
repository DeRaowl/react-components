import React, { useState, useRef, useEffect } from "react";

function Images({ image, styleClass }) {
  const [showImage, setShowImage] = useState(false);
  const imgRef = useRef(null);

  const refObserver = function (ref, setShowImage) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        setShowImage(true);
        observer.disconnect();
      });
    });
    observer.observe(ref);
  };

  useEffect(() => {
    refObserver(imgRef.current, setShowImage);
  }, []);

  if (!showImage) {
    return <span ref={imgRef} className={`span-style ${styleClass}`} />;
  }
  return <img src={image} alt={image} className={styleClass} />;
}

export default Images;
