import React from "react";
import { navigations } from "../../data/Nav";
import { social } from "../../data/Social";
import { programs } from "../../data/Program";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-items">
            <div className="footer-title">
              <h2>Programs</h2>
              <ul>
                {programs.map((val, index) => (
                  <li key={index}>
                    <Link to={val.path}>{val.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-title">
              <h2>Quick links</h2>
              <ul>
                {navigations.map((val, index) => (
                  <li key={index}>
                    <Link to={val.path}>{val.name}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
              </ul>
            </div>
            <div className="footer-title">
              <h2>Prayers</h2>
              <ul>
                <li>
                  <Link to="/prayer-request">Prayer request</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-title location">
            <div>
              <h2>MFMCF FUOYE</h2>
              <div className="loc-icon">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  Aso Rock, along school road,
                  <br /> behinde RCCG church
                  <br /> Oye Ekiti, Ekiti state.
                </p>
              </div>
              <div className="loc-icon">
                <i className="fa-solid fa-location-dot"></i>
                <p>
                  Along Arakasin Church,
                  <br /> Usin Area, Ikole Ekiti, Ekiti State
                </p>
              </div>
            </div>
            <div className="logo">
              <img src="./images/mfmcf-logo.png" alt="" />
              <img src="./images/fuoye-logo.png" alt="" />
            </div>
          </div>
          <div className="social">
            {social.map((val, index) => (
              <a target="_blank" rel="noreferrer" key={index} href={val.link}>
                <i className={val.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="copyright container">
          <p>
            © {new Date().getFullYear()} MFMCF FUOYE Media. All rights reseaved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
