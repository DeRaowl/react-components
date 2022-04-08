import React, { useState } from "react";

const AccordianItem = ({ title, body, multiple, active, onToggle }) => {
  const [showFlag, setShowFlag] = useState(false);

  const isActive = () => (multiple ? showFlag : active);

  const showContent = () => {
    setShowFlag((old) => !old);
    onToggle();
  };

  return (
    <section
      className={`${
        isActive() ? "accordian-wrapper active" : "accordian-wrapper"
      } `}
    >
      <div className="accordian-card">
        <div className="accordian-header" onClick={showContent}>
          {title}
          <span>{active ? "-" : "+"}</span>
        </div>
        <div className="accordian-body">{body}</div>
      </div>
    </section>
  );
};

export default AccordianItem;
