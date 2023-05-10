import React from "react";
import Intro from "./Intro/Intro";
import Convention from "./Convention/Convention";
import Anniversary from "./Anniversary/Anniversary";
import FirstTimer from "./FirstTimer/FirstTimer";
import BirthdayCelebrant from "./BirthdayCelebrant/BirthdayCelebrant";
import NewsLetter from "./NewsLetter/NewsLetter";

function Home() {
  return (
    <>
      <Intro />
      <Convention />
      <Anniversary />
      <FirstTimer />
      <BirthdayCelebrant />
      <NewsLetter />
    </>
  );
}

export default Home;
