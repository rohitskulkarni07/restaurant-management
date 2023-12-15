import React, { useState, useEffect } from "react";
import UserService from "../app/service/user.service";
import Tables from "./Tables";

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>Home:{content}</h3>
      </header>
      <Tables></Tables>
    </div>
  );
};

export default Home;
