import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/questions">Assessment</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navbar;
