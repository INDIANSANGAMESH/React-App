import React from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/next");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <p className="bold-text">Hello All !!!</p>
          <p className="bold-text" >This is a churn Prediction ML</p>
          <button className="blue-button" onClick={handleStartClick}>
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;