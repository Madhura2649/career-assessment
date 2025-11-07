import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Career Assessment Tool</h1>
      <p>Discover your strengths and find the right career path!</p>
      <button onClick={() => navigate("/questions")}>Start Assessment</button>
    </div>
  );
};

export default Home;
