import React, { useState, useEffect } from "react";
import "bootstrap/js/src/collapse.js";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function Navbar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-md fixed-top ${
        navColour ? classes.sticky : classes.navbar
      }`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => updateExpanded(expand ? false : "expanded")}

        >
          <span
            className="navbar-toggler-icon"
          ></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item me-5">
              <Link
                className="nav-link"
                style={{ color: "white" }}
                aria-current="page"
                to="/"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome /> Home
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link
                className="nav-link"
                style={{ color: "white" }}
                to="about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser /> About
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link
                className="nav-link"
                to="project"
                style={{ color: "white" }}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen /> Project
              </Link>
            </li>
            <li className="nav-item me-5">
              <Link
                className="nav-link"
                to="contact"
                style={{ color: "white" }}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser /> Contact
              </Link>
            </li>
            <li className={`${classes["fork-btn"]} me-5`}>
              <Link
                to="https://github.com/aaquib-anzar/Portfolio"
                target="_blank"
                className={classes["fork-btn-inner"]}
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
