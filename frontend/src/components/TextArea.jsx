import React from "react";
import "./../styles/components.css";

const TextArea = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="text-area">
      <label>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
