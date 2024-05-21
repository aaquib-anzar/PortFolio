import React from "react";
import homeLogo from "../../assets/home-main.svg";
import Home2 from "./Home2";
import classes from './Home.module.css'

function Home() {
  return (
    <section className={`container-fluid ${classes["home-section"]}`} id="home">
      <div className={`${classes["home-content"]} container-fluid`}>
        <div className="row">
          <div className={`col-md-7 ${classes["home-header"]}`}>
            <h1 className={classes.heading}>
              Hi There!{" "}
              <span className={classes.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className={classes["heading-name"]}>
              I'M
              <strong className={classes["main-name"]}> Aaquib Anzar</strong>
            </h1>
            <div style={{ padding: 50, textAlign: "center" }}>
              <h1><strong className={classes["main-name"]}>Software Developer</strong></h1>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{textAlign:"center"}}
            />
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
