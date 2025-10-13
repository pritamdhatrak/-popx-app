import React, { useState, useContext } from "react";
import InputField from "../components/InputField";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function CreateAccount() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setUser({ name: formData.name, email: formData.email });
    navigate("/account-settings");
  };

  return (
    <div className="page">
      <h2>Create your PopX account</h2>
      <InputField label="Full Name*" name="name" value={formData.name} onChange={handleChange} />
      <InputField label="Phone number*" name="phone" value={formData.phone} onChange={handleChange} />
      <InputField label="Email address*" name="email" value={formData.email} onChange={handleChange} />
      <InputField label="Password*" name="password" type="password" value={formData.password} onChange={handleChange} />
      <InputField label="Company name" name="company" value={formData.company} onChange={handleChange} />
      <div className="radio-group">
        <p>Are you an Agency?*</p>
        <label>
          <input type="radio" name="agency" value="yes" checked={formData.agency === "yes"} onChange={handleChange}/>
          Yes
        </label>
        <label>
          <input type="radio" name="agency" value="no" checked={formData.agency === "no"} onChange={handleChange}/>
          No
        </label>
      </div>
      <button className="btn-primary" onClick={handleSubmit}>Create Account</button>
    </div>
  );
}
