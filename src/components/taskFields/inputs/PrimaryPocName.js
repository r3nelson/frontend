import React, { useState } from "react";


const PrimaryPocName = () => {
  const [valuePoc, setValuePoc] = useState(""); 
  const [integerValuePoc, setIntegerValuePoc] = useState(0);

  const handleChange = (event) => {
    setValuePoc(event.target.value); 
    if (event.target.value !== "") {
      setIntegerValuePoc(1); 
    } else {
      setIntegerValuePoc(0); 
    }
  };

  return (
    console.log("")
  );
};

export default PrimaryPocName;
