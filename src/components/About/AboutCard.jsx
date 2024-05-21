import classes from "./About.module.css";
import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className={`card ${classes["quote-card-view"]}`}>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className={classes.purple}>Aaquib Anzar </span>
            from{" "}
            <span className={classes.purple}> Ghaziabad,UttarPradesh.</span>
            <br />I did my schooling from <span className={classes.purple}> D.D.P.S,Ghaziabad</span>. I did my Bachelor
            of Technology from{" "}
            <span className={classes.purple}>
              {" "}
              Dr.A.P.J Abdul Kalam Technical University,UttarPradesh.
            </span>
            .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="list-unstyled">
            <li className={classes["about-activity"]}>
              <ImPointRight /> Playing BaseketBall
            </li>
            <li className={classes["about-activity"]}>
              <ImPointRight /> Study General Studies
            </li>
            <li className={classes["about-activity"]}>
              <ImPointRight /> Living
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Start - Make your today better than Yesterday - End{" "}
          </p>
        </blockquote>
      </div>
    </div>
  );
}

export default AboutCard;
