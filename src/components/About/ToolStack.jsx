
import classes from './About.module.css'
import React from "react";
import {
  SiVisualstudiocode,
  SiVercel,
  SiLinux,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiReact,
} from "react-icons/si";

function ToolStack() {
  return (
    <div className="row justify-content-center" style={{ paddingBottom: "50px" }}>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiHtml5/>
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiBootstrap/>
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiVercel />
      </div>
      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiCss3/>
      </div>

      <div className={`col-md-2 col-4 ${classes["tech-icons"]}`}>
        <SiReact/>
      </div>
    </div>
  );
}

export default ToolStack;
