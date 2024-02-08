import React, { useState } from "react";


const AdditionalPocName = () => {
  const [value, setValue] = useState(""); 
  const [integerValue, setIntegerValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value); 
    if (event.target.value !== "") {
      setIntegerValue(1); 
    } else {
      setIntegerValue(0); 
    }
  };

  return (
    console.log("")
  );
};

export default AdditionalPocName;