import React from "react";
import "./intro.css";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="text">
            <h2>MFMCF FUOYE</h2>
            <p>We are the...</p>
            <TypeAnimation
              sequence={[
                "Restored Generation.",
                2000,
                "Blessed Generation.",
                2000,
                "Love Generation.",
                2000,
                "Light Generation.",
                2000,
              ]}
              wrapper="h1"
              cursor={true}
              speed={{ type: "keyStrokeDelayInMs", value: 100 }}
              repeat={Infinity}
              style={{ fontSize: "2em", display: "inline-block" }}
            />
            <p id="p5">A family that is built on a solid rock.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
