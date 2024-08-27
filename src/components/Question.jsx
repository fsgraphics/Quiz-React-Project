import React from "react";
import classes from "../components/Styles/Question.module.css";
import Answers from "./Answers";

const Question = () => {
  return (
    <div className={classes.question}>
      <div className="qtitle">
        <span className="material-icons-outlined">help_outline</span>Here goes
        the question from FS Digital?
      </div>
      <Answers />
    </div>
  );
};

export default Question;
