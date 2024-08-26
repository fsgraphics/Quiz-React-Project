import React from "react";
import "../components/Styles/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import Layout from "./Layout";

const App = () => {
  return (
    <Layout>
      <Home />
      <Login />
      <Quiz />
      <Result />
      <Signup />
    </Layout>
  );
};

export default App;
