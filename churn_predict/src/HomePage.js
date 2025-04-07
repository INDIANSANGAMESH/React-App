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
      <div className="box" style={{ width: '400px', height: '200px', backgroundColor: '#fff', color: '#000', borderRadius: '15px' }}>
        <p style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Pacifico, cursive' }}>Hello All !!!</p>
          <p style={{ fontFamily: 'Lato, sans-serif' }}>This is a churn Prediction ML</p>
          <button className="blue-button" onClick={handleStartClick}>
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
