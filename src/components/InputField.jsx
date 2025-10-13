import React from "react";

export default function InputField({ label, placeholder, type = "text", name, value, onChange }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}
