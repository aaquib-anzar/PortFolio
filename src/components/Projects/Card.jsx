import React from "react";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import classes from "./Card.module.css";

function Card({ imgPath, title, description, ghLink, demoLink }) {
  return (
    <>
      <div className={classes.card}>
        <img src={imgPath} className={classes.image} alt="..." />
        <div className={classes["card-content"]}>
          <h5 className={classes["card-title"]}>{title}</h5>
          <p
            className={classes["card-description"]}
            style={{ textAlign: "justify" }}
          >
            {description}
          </p>
          <div className={classes["card-links"]}>
            <a
              className={`btn ${classes["btn-primary"]}`}
              href={ghLink}
              target="_blank"
              role="button"
            >
              <BsGithub />&nbsp;
            {"Github"}
            </a>
            <a
              className={`btn ${classes["btn-primary"]}`}
              href={demoLink}
              target="_blank"
              role="button"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite />&nbsp;
            {"Demo"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
