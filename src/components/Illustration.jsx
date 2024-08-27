import React from "react";
import classes from "../components/Styles/Illustration.module.css";

const Illustration = ({ children }) => {
  return <div className={classes.illustration}>{children}</div>;
};

export default Illustration;
