import React, { useState } from "react";
import "./UserInputs.css"; // Ensure you have the required CSS setup

const UserInputs = () => {
  const [inputs, setInputs] = useState({
    Tenure: "",
    Online_Security: "",
    Tech_Support: "",
    Monthly_charges: "",
    Paper_less_Billing: "",
    Senior_citizen: ""
  });

  const [prediction, setPrediction] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const predict = async (inputs) => {
    return Object.values(inputs).map(Number).reduce((a, b) => a + b, 0); // Example: sum of inputs
  };

  const handlePrediction = async () => {
    try {
      const result = await predict(inputs);
      setPrediction(result);
    } catch (error) {
      setPrediction(`Error: ${error.message}`);
    }
  };

  // Define specific order for input fields
  const inputOrder = ["Tenure", "Online_Security", "Tech_Support", "Monthly_charges", "Paper_less_Billing", "Senior_citizen"];

  return (
    <div className="App">
      <header className="header">Welcome to the Prediction Page!</header>
      <div className="box">
        <p>Enter values below and get predictions:</p>
        <form>
          {inputOrder.map((key) => (
            <div key={key}>
              <label htmlFor={key}>{key.replace(/_/g, " ")}:</label> {/* This removes underscores */}
              <input
                type="text"
                id={key}
                name={key}
                value={inputs[key]}
                onChange={handleInputChange}
              />
              <br /><br />
            </div>
          ))}
        </form>
        <button className="blur-button" onClick={handlePrediction}>Predict</button>
        {prediction && <h2>Prediction: {prediction}</h2>}
      </div>
    </div>
  );
};

export default UserInputs;
