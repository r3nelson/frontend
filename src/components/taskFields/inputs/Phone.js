import React, { useState } from "react";


const Phone = () => {
  const [valuePhone, setValuePhone] = useState(""); 
  const [integerValuePhone, setIntegerValuePhone] = useState(0);

  const handleChange = (event) => {
    setValuePhone(event.target.value); 
    if (event.target.value !== "") {
      setIntegerValuePhone(1); 
    } else {
      setIntegerValuePhone(0); 
    }
  };
  return (
    console.log("")
  );
};


export default Phone;
