import React from "react";
import "./programs.css";
import { programs } from "../data/Program";
import FirstTimer from "../Home/FirstTimer/FirstTimer";

function Programs() {
  return (
    <>
      <section className="program flex" id="program">
        <div className="container">
          <h2 className="title">Join us on any of our weekly programs...</h2>
          {programs.map((val, index) => (
            <div className="program-box">
              <div className="icon">{val.letter}</div>
              <div className="text">
                <h3>{val.name}</h3>
                <p>{val.desc}</p>
                <div className="date-time">
                  <i class="fa-solid fa-calendar-days"></i>
                  <p style={{ marginTop: 10 }}>Day: Every {val.day}</p>
                </div>
                <div className="date-time">
                  <i class="fa-solid fa-clock"></i>
                  <p style={{ marginTop: 6 }}>Time: {val.time}</p>
                </div>
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
