import React, { useState } from "react";
import AccordianItem from "./AccordianItem";
import "./index.css";
const Accordian = ({ data, multiple = false }) => {
  const [active, setActive] = useState("");
  return (
    <div>
      {data.map((item, idx) => {
        return (
          <AccordianItem
            key={item.id}
            {...item}
            multiple={multiple}
            active={active === idx}
            onToggle={() => setActive(active === idx ? "" : idx)}
          />
        );
      })}
    </div>
  );
};

export default Accordian;
