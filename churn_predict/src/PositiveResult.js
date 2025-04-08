import React from "react";
import { useNavigate } from "react-router-dom";

const PositiveResult = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="form-box" style={{ backgroundColor: "#ff4d4f", color: "white" }}>
        <h2>⚠️ Churn Likely</h2>
        <p>The model predicts that this customer is likely to churn.</p>
        <button className="predict-button" onClick={() => navigate("/")}>
          Back to Input
        </button>
      </div>
    </div>
  );
};

export default PositiveResult;
