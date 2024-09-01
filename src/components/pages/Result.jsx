import React from "react";
import Summary from "../Summary";
import Analysis from "../Analysis";
import { useLocation } from "react-router-dom";

const Result = () => {

  const  {state} = useLocation();
  // const {qna} = state;
   console.log(state);
  return (
    <>
      <Summary />
      <Analysis />
    </>
  );
};

export default Result;
