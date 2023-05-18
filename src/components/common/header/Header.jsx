import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { navigations } from "../../data/Nav";
import { social } from "../../data/Social";

const Header = () => {
  const [navlist, setNavlist] = useState(false);
  const [connectList, setConnectList] = useState(false);
  return (
    <>
      <header>
        <div className="container flex">
          <a href="/">
            <div className="logo flex">
              <img src="./images/mfmcf-logo.png" alt="" />
              <img src="./images/fuoye-logo.png" alt="" />
            </div>
          </a>
          <div className="nav">
            <ul className={navlist ? "small" : "flex"}>
              {navlist
                ? navigations.map((nav, index) => (
                    <li key={index} onClick={() => setNavlist(!navlist)}>
                      <i className={nav.icon}></i>
                      <Link to={nav.path}>{nav.name}</Link>
                    </li>
                  ))
                : navigations.map((nav, index) => (
                    <li key={index}>
                      {nav.hasDropdown ? (
                        <div
                          className="dropdown"
                          onClick={() => setConnectList(!connectList)}
                        >
                          {nav.name}
                          {/* {connectList ? ( */}
                          <i class="fa-solid fa-angle-down"></i>
                          {/* ) : (
                            <i class="fa-solid fa-angle-right"></i>
                          )} */}
                        </div>
                      ) : (
                        <Link to={nav.path}>{nav.name}</Link>
                      )}
                    </li>
                  ))}
            </ul>
          </div>
          <Link to="/events">
            <div className="button flex">
              <span className="events">Events</span>
            </div>
          </Link>
          <div className="toggle">
            <span onClick={() => setNavlist(!navlist)}>
              <i className={navlist ? "fa-solid fa-x" : "fa-solid fa-bars"}></i>
            </span>
          </div>
        </div>
      </header>
      <div className={connectList ? "show" : "hide"}>
        <div>
          <p>You can connect with us on any of our social handles.</p>
        </div>
        <ul>
          {social.map((val, index) => (
            <li key={index}>
              <i className={val.icon}></i>
              <a target="_blank" rel="noreferrer" href={val.link}>
                {val.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
