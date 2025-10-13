import React from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="page">
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="btn-primary" onClick={() => navigate("/create-account")}>Create Account</button>
      <button className="btn-secondary" onClick={() => navigate("/login")}>Already Registered? Login</button>
    </div>
  );
}
