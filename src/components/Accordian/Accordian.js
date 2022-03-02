import React from "react";
import SingleQuestion from "./SingleQuestion";
import "./Accordian.css";
import { Link } from "react-router-dom";

function Accordian({ data }) {
  return (
    <section className="accordian">
      <h1>FAQ</h1>
      <Link to="/accordian">
        {data.map((item) => {
          return <SingleQuestion key={item.id} {...item} />;
        })}
      </Link>
    </section>
  );
}

export default Accordian;
