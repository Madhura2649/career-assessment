import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Questions from "./components/Questions";
import Result from "./components/Result";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
