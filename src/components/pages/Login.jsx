import React from "react";
import classes from "../Styles/Login.module.css";
import Illustration from "../Illustration";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";
import LoginImg from "../../assets/images/login.svg";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration>
          <img src={LoginImg} alt="Login" />
        </Illustration>
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter email" icon="lock" />
          <Button>
            <span>Submit now</span>
          </Button>
          <div className="info">
            Don't have an account? <a href="signup.html">Signup </a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
