import classes from "./About.module.css";
import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiMysql, DiPython } from "react-icons/di";
import {
  SiDjango,
  SiFirebase,
  SiTailwindcss,
  SiFlask,
  SiGithub,
} from "react-icons/si";

function Techstack() {
  return (
    <div
      className="row justify-content-center"
      style={{ paddingBottom: "50px" }}
    >
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <CgCPlusPlus />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <DiJavascript1 />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <DiPython />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <DiMysql />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <DiReact />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiDjango />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiFlask />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiTailwindcss />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiGithub />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiFirebase />
      </div>
    </div>
  );
}

export default Techstack;
