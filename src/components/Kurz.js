import React from "react";
import "./Kurz.css";

const Kurz = ({ nameOfKurz, company, date, id, description }) => {
  return (
    <div className="kurzclassnem">
      <h3>{nameOfKurz}</h3>
      <h4>{company}</h4>
      <h5>{date}</h5>
      <h6>{id}</h6>
      <p>{description}</p>
    </div>
  );
};

export default Kurz;
