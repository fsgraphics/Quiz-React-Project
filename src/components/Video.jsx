import React from "react";
import classes from "./Styles/Video.module.css";
import imges from "../assets/images/City.jpg";

const Video = () => {
  return (
    <a href="./quiz.html">
      <div className={classes.video}>
        <img src={imges} alt="City" />
        <p>React Hooks Bangla React useReducer.</p>
        <div className={classes.qmeta}>
          <p>Question</p>
          <p>Tolal points:</p>
        </div>
      </div>
    </a>
  );
};

export default Video;
