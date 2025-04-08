import React, { useState } from "react";
import "./UserInputs.css";

const UserInputs = () => {
  const [rawInputs, setRawInputs] = useState({
    Tenure: "",
    Online_Security: "",
    Tech_Support: "",
    Monthly_charges: "",
    Paper_less_Billing: "",
    Senior_citizen: "",
  });

  const [normalizedInputs, setNormalizedInputs] = useState({
    Tenure: "",
    Online_Security: "",
    Tech_Support: "",
    Monthly_charges: "",
    Paper_less_Billing: "",
    Senior_citizen: "",
  });

  const [prediction, setPrediction] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setRawInputs((prev) => ({
      ...prev,
      [name]: value,
    }));

    const normalizedValue =
      name === "Tenure"
        ? (parseFloat(value) - 29) / 46
        : name === "Monthly_charges"
        ? (parseFloat(value) - 25) / 75
        : value;

    setNormalizedInputs((prev) => ({
      ...prev,
      [name]: normalizedValue,
    }));
  };

  const handlePrediction = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(normalizedInputs),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch prediction from server");
      }

      const result = await response.json();
      setPrediction(result.prediction);
    } catch (error) {
      setPrediction(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <div className="form-box">
        <h2 className="form-title">Churn Prediction</h2>
        <form>
          <div className="input-group">
            <label>Tenure</label>
            <input
              type="number"
              name="Tenure"
              value={rawInputs.Tenure}
              onChange={handleInputChange}
              placeholder="Tenure"
            />
          </div>

          <div className="input-group">
            <label>Online Security</label>
            <div className="radio-group">
              <label><input type="radio" name="Online_Security" value="1" onChange={handleInputChange} /> Yes</label>
              <label><input type="radio" name="Online_Security" value="0" onChange={handleInputChange} /> No</label>
            </div>
          </div>

          <div className="input-group">
            <label>Tech Support</label>
            <div className="radio-group">
              <label><input type="radio" name="Tech_Support" value="1" onChange={handleInputChange} /> Yes</label>
              <label><input type="radio" name="Tech_Support" value="0" onChange={handleInputChange} /> No</label>
            </div>
          </div>

          <div className="input-group">
            <label>Monthly Charges</label>
            <input
              type="number"
              name="Monthly_charges"
              value={rawInputs.Monthly_charges}
              onChange={handleInputChange}
              placeholder="Charges"
            />
          </div>

          <div className="input-group">
            <label>Paperless Billing</label>
            <div className="radio-group">
              <label><input type="radio" name="Paper_less_Billing" value="1" onChange={handleInputChange} /> Yes</label>
              <label><input type="radio" name="Paper_less_Billing" value="0" onChange={handleInputChange} /> No</label>
            </div>
          </div>

          <div className="input-group">
            <label>Senior Citizen</label>
            <div className="radio-group">
              <label><input type="radio" name="Senior_citizen" value="1" onChange={handleInputChange} /> Yes</label>
              <label><input type="radio" name="Senior_citizen" value="0" onChange={handleInputChange} /> No</label>
            </div>
          </div>
        </form>

        <button className="predict-button" onClick={handlePrediction}>
          Predict 🔍
        </button>
        {prediction && (
          <div className="prediction-output">Prediction: {prediction}</div>
        )}
      </div>
    </div>
  );
};

export default UserInputs;
