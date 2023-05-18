import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Programs from "../Programs/Programs";
import Blog from "../Blog/Blog";
import Spotlight from "../Spotlight/Spotlight";
import Event from "../Event/Event";

function Pages() {
  return (
    <>
      <Router>
        <Header />
        <Routes>{<Route exact path="/" element={<Home />} />}</Routes>
        <Routes>{<Route path="/programs" element={<Programs />} />}</Routes>
        <Routes>{<Route path="/blog" element={<Blog />} />}</Routes>
        <Routes>{<Route path="/spotlight" element={<Spotlight />} />}</Routes>
        <Routes>{<Route path="/events" element={<Event />} />}</Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Pages;
