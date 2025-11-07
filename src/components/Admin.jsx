import React, { useState } from "react";
import { questions as defaultQuestions } from "../data/questions";

const Admin = () => {
  const [questions, setQuestions] = useState(defaultQuestions);
  const [newQuestion, setNewQuestion] = useState("");

  const addQuestion = () => {
    if (newQuestion.trim() === "") return;
    const id = questions.length + 1;
    setQuestions([...questions, { id, question: newQuestion, type: "yesno", category: "General" }]);
    setNewQuestion("");
  };

  return (
    <div className="admin">
      <h2>Admin Panel</h2>
      <h3>Current Questions:</h3>
      <ul>
        {questions.map((q) => (
          <li key={q.id}>{q.question}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
      />
      <button onClick={addQuestion}>Add Question</button>
    </div>
  );
};

export default Admin;
