import React from "react";
import "./Zkusenost.css";

const Zkusenost = ({ nameOfPosition, company, dateFromTo, tasks }) => {
  return (
    <div className="zkusenostClassName">
      <h3>{nameOfPosition}</h3>
      <h4>{company}</h4>
      <p>{dateFromTo}</p>
      <ul>
        {tasks.map((oneTask, index) => {
          return <li key={index}>{oneTask}</li>;
        })}
      </ul>
    </div>
  );
};

export default Zkusenost;
