import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Profile></Profile>
      {/* <Register></Register> */}
      {/* <Login></Login> */}
    </div>
  );
};

export default App;
