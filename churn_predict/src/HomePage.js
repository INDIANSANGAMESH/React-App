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
          <p className="bold-text">HEY DUDE </p> 
          <br />
          <p className="bold-text" > I’m your friendly neighborhood churn predictor 🤖🤖🤖.<br />Just gimme some details and I'll tell you if someone’s planning to GHOST the company !!!</p>
          <br />
          <button className="blue-button" onClick={handleStartClick}>
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;