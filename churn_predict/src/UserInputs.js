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
      <header className="header">🎯 Prediction Page 🚀</header>
      <div className="box">
        <p className="subtitle">Please Enter Your Details</p>
        <form>
          <label htmlFor="Tenure">Tenure:</label>
          <input
            type="number"
            id="Tenure"
            name="Tenure"
            value={rawInputs.Tenure}
            onChange={handleInputChange}
            placeholder="Enter tenure (1-100)"
          />

          <label>Online Security:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="Online_Security_Yes"
              name="Online_Security"
              value="1"
              onChange={handleInputChange}
            />
            <label htmlFor="Online_Security_Yes">Yes</label>
            <input
              type="radio"
              id="Online_Security_No"
              name="Online_Security"
              value="0"
              onChange={handleInputChange}
            />
            <label htmlFor="Online_Security_No">No</label>
          </div>

          <label>Tech Support:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="Tech_Support_Yes"
              name="Tech_Support"
              value="1"
              onChange={handleInputChange}
            />
            <label htmlFor="Tech_Support_Yes">Yes</label>
            <input
              type="radio"
              id="Tech_Support_No"
              name="Tech_Support"
              value="0"
              onChange={handleInputChange}
            />
            <label htmlFor="Tech_Support_No">No</label>
          </div>

          <label htmlFor="Monthly_charges">Monthly Charges:</label>
          <input
            type="number"
            id="Monthly_charges"
            name="Monthly_charges"
            value={rawInputs.Monthly_charges}
            onChange={handleInputChange}
            placeholder="Enter charges (1-100)"
          />

          <label>Paperless Billing:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="Paper_less_Billing_Yes"
              name="Paper_less_Billing"
              value="1"
              onChange={handleInputChange}
            />
            <label htmlFor="Paper_less_Billing_Yes">Yes</label>
            <input
              type="radio"
              id="Paper_less_Billing_No"
              name="Paper_less_Billing"
              value="0"
              onChange={handleInputChange}
            />
            <label htmlFor="Paper_less_Billing_No">No</label>
          </div>

          <label>Senior Citizen:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="Senior_citizen_Yes"
              name="Senior_citizen"
              value="1"
              onChange={handleInputChange}
            />
            <label htmlFor="Senior_citizen_Yes">Yes</label>
            <input
              type="radio"
              id="Senior_citizen_No"
              name="Senior_citizen"
              value="0"
              onChange={handleInputChange}
            />
            <label htmlFor="Senior_citizen_No">No</label>
          </div>
        </form>

        <button className="blur-button" onClick={handlePrediction}>
          Get My Prediction 💡
        </button>
        {prediction && <h2 className="prediction-output">Prediction: {prediction}</h2>}
      </div>
    </div>
  );
};

export default UserInputs;