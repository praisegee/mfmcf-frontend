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
                <img src="../images/0001.jpeg" alt="" />
                {/* <Skeleton /> */}
              </div>
            </div>
            <div className="details">
              <p>
                <span>Name:</span> Adesanmi Dayo PraiseGod
              </p>
              <p>
                <span>Bio:</span> Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Illum velit placeat reiciendis
              </p>
              <p>
                <span>Birthday:</span> Oct 9th
              </p>
              <p>
                <span>Marital Status:</span> Single
              </p>
              <p>
                <span>Campus:</span> Oye
              </p>
              <p>
                <span>Faculty:</span> Science
              </p>
              <p>
                <span>Department:</span> Computer Science
              </p>
              <p>
                <span>Hobby:</span> Cooking, Teaching
              </p>
              <p>
                <span>Fav Bible verse:</span> John 3 v 16
              </p>
              <p>
                <span>Phone Number:</span> 09033345017
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
