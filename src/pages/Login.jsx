import React, { useState, useContext } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setUser({ name: "User", email });
    navigate("/account-settings");
  };

  return (
    <div className="page">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <InputField label="Email Address" placeholder="Enter email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputField label="Password" placeholder="Enter password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
}
