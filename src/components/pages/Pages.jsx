import React from "react";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Programs from "../Programs/Programs";

function Pages() {
  return (
    <>
      <Router>
        <Header />
        <Routes>{<Route exact path="/" element={<Home />} />}</Routes>
        <Routes>{<Route path="/programs" element={<Programs />} />}</Routes>
        <Footer />
      </Router>
    </>
  );
}

export default Pages;
