import React from "react";
import classes from "../components/Styles/Account.module.css";

const Account = () => {
  return (
    <div className={classes.account}>
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
    </div>
  );
};

export default Account;
