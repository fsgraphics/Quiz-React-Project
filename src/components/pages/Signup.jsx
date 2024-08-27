import React from "react";
import classes from "../Styles/Signup.module.css";
import Illustration from "./../Illustration";
import SignupImg from "../../assets/images/signup.svg";
import Form from "../Form";
import TextInput from "../TextInput";
import Button from "../Button";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration>
          <img src={SignupImg} alt="Login" />
        </Illustration>
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <label for="#">
            <input type="checkbox" />
            <span> I agree to the terms & Conditions</span>{" "}
          </label>
          <Button>
            <span>Submit now</span>
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
