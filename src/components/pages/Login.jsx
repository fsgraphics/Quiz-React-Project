import React from "react";
import Illustration from "../Illustration";
import LoginImg from "../../assets/images/login.svg";
import LoginForm from "../LoginForm";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration>
          <img src={LoginImg} alt="Login" />
        </Illustration>
        <LoginForm/>
      </div>
    </>
  );
};

export default Login;
