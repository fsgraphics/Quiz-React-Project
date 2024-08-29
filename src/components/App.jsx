import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../components/Styles/App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import Layout from "./Layout";
import { AuthProvider } from "../contexts/AuthContext";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
};

export default App;
