import React from "react";
import "./firsttimer.css";
import { Link } from "react-router-dom";

function FirstTimer() {
  return (
    <>
      <section className="firsttimer">
        <div className="container">
          <div className="box">
            <h3>Are you new to the family?</h3>
            <p>
              You are so special to us and we're really glad to have you in our
              midst...
              <pre>
                May the Lord God bless you real good!
                <br />
                He brought you here, to bless you life <br />
                May the Lord God Bless you real good!
              </pre>
            </p>
          </div>
          <Link to="/first-timer">
            <div className="button">Let's know you more</div>
          </Link>
        </div>
      </section>
    </>
  );
}

export default FirstTimer;
