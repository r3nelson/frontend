import React, { useState } from "react";

const example_values = [
  "Intel Assessment",
  "Talking Points",
  "Order",
  "CONOP Presentation/Brief",
  "Other",
];

const ProductType = () => {
  const [customValue, setCustomValue] = useState("");

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue === "Other") {
      const newCustomValue = prompt("Enter Product Type:");
      if (newCustomValue !== null) {
        setCustomValue(newCustomValue);
      }
    } else setCustomValue("");
  };

  return (
    <div className="m-5">
      <label>Product Type:</label>
      <select
        className="border border-black ml-3"
        name="Product Type"
        id="Product Type"
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

export default ProductType;
