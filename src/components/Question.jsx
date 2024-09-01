import React from "react";
import classes from "../components/Styles/Question.module.css";
import Answers from "./Answers";

const Question = ({answers = [] }) => {
  return  answers.map((answer, index) => (
    <div className={classes.question} key={index} >
      <div className="qtitle">
        <span className="material-icons-outlined">help_outline</span> {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ))
};

export default Question;
