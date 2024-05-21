import React from "react";
import TechStack from "./TechStack";
import AboutCard from "./AboutCard";
import laptopImg from "../../assets/about.png";
import ToolStack from "./ToolStack";
import classes from "./About.module.css";

function About() {
  return (
    <>
     <h1 className={classes["about-heading"]}>
          About<strong className={classes.purple}>Me </strong> 
        </h1>
    
    <div className={`container-fluid ${classes["about-section"]}`}>
      <div className="container">
        <div className="row justify-content-center" style={{ padding: "10px" }}>
          <div
            className="col-md-7"
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                fontSize: "2.1em",
                paddingBottom: "20px",
              }}
            >
              Know Who <strong className={classes.purple}>I'M</strong>
            </h1>
            <AboutCard />
          </div>
          <div
            className="col-md-5"
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </div>
        </div>
      </div>
      <div>
        <h1 className={classes["about-heading"]}>
          Professional <strong className={classes.purple}>Skillset </strong>
        </h1>

        <TechStack />
      </div>
      <div>
        <h1 className={classes["about-heading"]}>
          <strong className={classes.purple}>Tools</strong> I use
        </h1>
        <ToolStack />
      </div>
    </div>
    </>
  );
}

export default About;

