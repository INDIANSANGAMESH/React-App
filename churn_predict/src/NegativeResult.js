import React from "react";
import { useNavigate } from "react-router-dom";

const NegativeResult = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="form-box" style={{ backgroundColor: "#28a745", color: "white" }}>
        <h2>✅ No Churn Detected</h2>
        <p>This customer is not likely to churn. Great news!</p>
        <button className="predict-button" onClick={() => navigate("/")}>
          Back to Input
        </button>
      </div>
    </div>
  );
};

export default NegativeResult;
