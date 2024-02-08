import React, { useState } from "react";

const Email = () => {

  const [valueEmail, setValueEmail] = useState(""); 
  const [integerValueEmail, setIntegerValueEmail] = useState(0);

  const handleChange = (event) => {
    setValueEmail(event.target.value); 
    if (event.target.value !== "") {
      setIntegerValueEmail(1); 
    } else {
      setIntegerValueEmail(0); 
    }
  };


  return (
    console.log("")
  );
};

export default Email;
