import React, { useState } from "react";

const StatusDropdown = ({ onChange, newStatus }) => {
  const [selectedOption, setSelectedOption] = useState(newStatus);
  const options = ["free", "occupied", "reserved"];

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="dropdown">
      <select value={selectedOption} onChange={handleOptionChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default StatusDropdown;
