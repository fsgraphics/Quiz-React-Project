import React from "react";
import classes from "../components/Styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({options = [], hendleChange}) => {
  return (
    <div className={classes.answers}>
      {options.map((option, index)=>(
        // eslint-disable-next-line react/jsx-key
        <Checkbox className={classes.answer} text={option.title} value= {index} checked= {option.checked} onChange = {(e)=> hendleChange(e, index)} />
      ))}
      
      
    
      
    </div>
  );
};

export default Answers;
