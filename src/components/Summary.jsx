import React from "react";
import Image from "../assets/images/success.png";
import classes from "../components/Styles/Summary.module.css";
import useFetch from "./../hooks/useFetch";

const Summary = ({ score, noq }) => {
  const { loading, error, result } = useFetch();
  return (
    <div className={classes.summary}>
      <div className={classes.point}>
        <p className={classes.score}>
          Your score is <br />
          {score} out of {noq * 5}
        </p>
      </div>
      <div className={classes.badge}>
        <img src={Image} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
