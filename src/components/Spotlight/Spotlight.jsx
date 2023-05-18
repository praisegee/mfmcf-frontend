import React from "react";
import "./spotlight.css";
// import Skeleton from "react-loading-skeleton";
import NewsLetter from "../Home/NewsLetter/NewsLetter";
import "react-loading-skeleton/dist/skeleton.css";

function Spotlight() {
  return (
    <>
      <section className="spotlight" id="spotlight">
        <div className="container">
          <h3>Our Weekly Spotlight</h3>
          <p>Meet with our lovely face of the week.</p>
          <div className="content">
            <div className="profile">
              <div className="img">
                <img src="../images/organise.jpeg" alt="" />
                {/* <Skeleton /> */}
              </div>
            </div>
            <div className="details">
              <p>
                <span>Name:</span> Bro Kenny
              </p>
              <p>
                <span>Bio:</span> Handsome, hard-working and very cool guy...
                😊😌
              </p>
              <p>
                <span>Birthday:</span> May 2nd
              </p>
              <p>
                <span>Marital Status:</span> Married
              </p>
              <p>
                <span>Campus:</span> Oye
              </p>
              <p>
                <span>Faculty:</span> Education
              </p>
              <p>
                <span>Department:</span> Mathematics Education
              </p>
              <p>
                <span>Hobby:</span> Teaching
              </p>
              <p>
                <span>Fav Bible verse:</span> Rom 12 v 2
              </p>
              <p>
                <span>Phone Number:</span> +2348022222222
              </p>
            </div>
          </div>
        </div>
      </section>
      <NewsLetter />
    </>
  );
}

export default Spotlight;
