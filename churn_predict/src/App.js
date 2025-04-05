import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";

// Import your new images
import NewImage1 from "./Machine1.png";
import NewImage2 from "./Machine2.png";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/next"); // Redirects to the next page
  };

  return (
    <div className="App">
      <div className="container">
        {/* Background Images */}
        <img src={NewImage1} alt="Graphic 1" className="image top-left" />
        <img src={NewImage2} alt="Graphic 2" className="image bottom-right" />

        {/* Content Box */}
        <div className="box">
          <p className="bold-text">Hello All !!!</p>
          <p>This is a churn Prediction ML</p>
          <button className="blue-button" onClick={handleStartClick}>
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};

const NextPage = () => {
  return (
    <div className="App">
      <h1>Welcome to the Next Page!</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/next" element={<NextPage />} />
      </Routes>
    </Router>
  );
}

export default App;