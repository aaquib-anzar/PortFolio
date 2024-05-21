import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import classes from "./Footer.module.css"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className={`container-fluid ${classes.footer} `}>
        <div className="row">
          <div className={`col-md-4 ${classes["footer-copywright"]}`}>
            <h3>Designed and Developed by Aaquib Anzar</h3>
          </div>
          <div className={`col-md-4 ${classes["footer-copywright"]}`}>
            <h3>Copyright © {year}</h3>
          </div>
          <div className={`col-md-4 ${classes["footer-body"]}`}>
            <ul className={classes["footer-icons"]}>
              <li className={classes["social-icons"]}>
                <a
                  href="https://github.com/aaquib-anzar"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className={classes["social-icons"]}>
                <a
                  href="https://x.com/Aaquib87575071"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareXTwitter />
                </a>
              </li>
              <li className={classes["social-icons"]}>
                <a
                  href="https://www.linkedin.com/in/aaquib-anzar-519771170/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={classes["social-icons"]}>
                <a
                  href="https://www.instagram.com/_aaquib_8782/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
