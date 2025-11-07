import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";

const Questions = () => {
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[current].id]: value });
  };

  const handleNext = () => {
    if (!answers[questions[current].id]) return; // require selection
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      localStorage.setItem("assessmentResults", JSON.stringify(answers));
      navigate("/result");
    }
  };

  return (
    <div className="questions">
      <h2>Career Assessment</h2>
      <div className="question">
        <p>{questions[current].question}</p>
        <div className="options">
          <button
            className={answers[questions[current].id] === "Yes" ? "selected" : ""}
            onClick={() => handleAnswer("Yes")}
          >
            Yes
          </button>
          <button
            className={answers[questions[current].id] === "No" ? "selected" : ""}
            onClick={() => handleAnswer("No")}
          >
            No
          </button>
        </div>
      </div>
      <button className="submit" onClick={handleNext}>
        {current + 1 === questions.length ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default Questions;
