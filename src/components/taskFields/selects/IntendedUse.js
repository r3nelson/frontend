import React, { useState } from "react";

const example_values = [
  "Conference",
  "Briefing/Meeting",
  "BiLAT/MultiLat Exchange",
  "Training",
  "Exercise",
  "Other",
];

const IntendedUse = () => {
  const [customValue, setCustomValue] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Other") {
      const newCustomValue = prompt("Enter Intended Use:");
      if (newCustomValue !== null) {
        setCustomValue(newCustomValue);
      }
    } else setCustomValue("");
  };

  return (
    <div className="m-5">
      <label>Intended Use:</label>
      <select
        className="border border-black ml-3"
        name="Intended Use"
        id="Intended Use"
        onChange={handleChange}
      >
        {example_values.map((value, index) => (
          <option key={index} value={value}>
            {customValue ? `Other: ${customValue}` : value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default IntendedUse;
