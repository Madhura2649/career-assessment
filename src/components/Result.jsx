import React from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

const Result = () => {
  const navigate = useNavigate();
  const answers = JSON.parse(localStorage.getItem("assessmentResults")) || {};

  const categories = {};
  questions.forEach((q) => {
    if (answers[q.id] === "Yes") {
      categories[q.category] = (categories[q.category] || 0) + 1;
    }
  });

  const recommended = Object.keys(categories).sort((a, b) => categories[b] - categories[a]);

  return (
    <div className="result">
      <h2>Assessment Results</h2>
      <p>Your strengths by category:</p>
      <ul>
        {Object.entries(categories).map(([cat, count]) => (
          <li key={cat}>
            {cat}: {count} point(s)
          </li>
        ))}
      </ul>
      <h3>Recommended Career Paths: {recommended.join(", ")}</h3>
      <button className="submit" onClick={() => navigate("/")}>
  Back to Home
</button>

    </div>
  );
};

export default Result;
