import React from "react";
import { useNavigate } from "react-router-dom";
import NOT_CHURN from './NOT CHURN.png';

const NegativeResult = () => {
  const navigate = useNavigate();

  return (
    <div
      className="App"
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Fullscreen Centered Image */}
      <img
        src={NOT_CHURN}
        alt="No Churn"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Button fixed at bottom center */}
      <button
        className="predict-button"
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          backgroundColor: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: "30px",
          fontSize: "16px",
          cursor: "pointer",
          width:"1000px"
        }}
        onClick={() => navigate("/")}
      >
        Back to Input
      </button>
    </div>
  );
};

export default NegativeResult;
