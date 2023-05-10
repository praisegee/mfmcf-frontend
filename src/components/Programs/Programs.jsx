import React from "react";
import "./programs.css";
import { programs } from "../data/Event";
// import Anniversary from "../Home/Anniversary/Anniversary";
import FirstTimer from "../Home/FirstTimer/FirstTimer";

function Programs() {
  return (
    <>
      <section className="program flex" id="program">
        <div className="container">
          {programs.map((val, index) => (
            <div className="program-box">
              <div className="icon">
                <p>Icon</p>
              </div>
              <div className="text">
                <h3>{val.name}</h3>
                <p>Program description</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FirstTimer />
    </>
  );
}

export default Programs;
