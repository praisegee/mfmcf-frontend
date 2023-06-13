import React, { useEffect, useState } from "react";
import "./birthdaycelebrant.css";
import { celebrants } from "../../data/Celeb";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

// async function getBirthdayClebrant() {
//   const resp = await fetch("http://127.0.0.1:8000/api/birthday-celebrants/");
//   return await resp.json();
// }

function Celebrant({ name, birthday, picture }) {
  return (
    <>
      <div className="celeb">
        <img src={picture} alt="" />
        <div className="lower">
          <p>{name}</p>
          <p>{birthday}</p>
        </div>
      </div>
    </>
  );
}

function BirthdayCelebrant({ deviceType }) {
  const [month, setMonth] = useState("");
  // const celebrants = getBirthdayClebrant();

  // const celebrants = [];
  useEffect(() => {
    setMonth(new Date().toLocaleString("default", { month: "long" }));
  }, []);

  return (
    <>
      <section className="celebrant">
        <div className="container">
          <h2>
            <span id="month">{month},</span> birthday celebrants
          </h2>
          <div className="box">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              // ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
              deviceType={deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item"
            >
              {celebrants.map((celeb, index) => (
                <div key={index}>
                  <Celebrant
                    name={celeb.name}
                    birthday={celeb.birthday}
                    picture={celeb.picture}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="text">
            On this special day, we want to take a moment to wish each and every
            one of you a very happy birthday! May this day bring you all the
            joy, happiness, and blessings that you deserve.
          </div>
        </div>
      </section>
    </>
  );
}

export default BirthdayCelebrant;
