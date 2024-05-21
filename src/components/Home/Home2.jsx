import React from "react";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import classes from "./Home.module.css";

function Home2() {
  return (
    <div
      className={`${classes["home-about-section"]} container-fluid`}
      id="about"
    >
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-8 ${classes["home-about-description"]}`}>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className={classes.purple}> INTRODUCE </span> MYSELF
            </h1>
            <p className={classes["home-about-body"]}>
              I started with programming and I have at least learnt something, I
              think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className={classes.purple}> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              and especially for <b className={classes.purple}>JavaScript</b> i
              would like to thank
              <b className={classes.purple}>
                {" "}
                NamasteJavaScript by Akshay Saini.
              </b>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className={classes.purple}>Web Technologies and Products </b>{" "}
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className={classes.purple}> Modern Javascript Library</b>
              </i>
              &nbsp; like
              <i>
                <b className={classes.purple}> React.js</b>
              </i>
            </p>
          </div>
          <div className={`col-md-4 ${classes.myAvtar}`}>
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ alignItems: "center" }}
              />
            </Tilt>
          </div>
        </div>

        <div className="row">
          <div className={`col-md-12 ${classes["home-about-social"]}`}>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className={classes.purple}>connect </span>with
              me
            </p>
            <ul className={classes["home-about-social-links"]}>
              <li className={classes["social-icons"]}>
                <a
                  href="https://github.com/aaquib-anzar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["home-social-icons"]}
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className={classes["social-icons"]}>
                <a
                  href="https://x.com/Aaquib87575071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["home-social-icons"]}
                >
                  <FaSquareXTwitter />
                </a>
              </li>
              <li className={classes["social-icons"]}>
                <a
                  href="https://www.linkedin.com/in/aaquib-anzar-519771170/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["home-social-icons"]}
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className={classes["social-icons"]}>
                <a
                  href="https://www.instagram.com/aaquib_8782/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes["home-social-icons"]}
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2;
