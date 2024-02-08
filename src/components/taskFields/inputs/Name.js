import React, { useState, useContext } from "react";

const Name = () => {

  const [valueName, setValueName] = useState(""); 
  const [integerValueName, setIntegerValueName] = useState(0);

  const handleChange = (event) => {
    setValueName(event.target.value); 
    if (event.target.value !== "") {
      setIntegerValueName(2); 
    } else {
      setIntegerValueName(1); 
    }
  };

  return (
    <div className="m-5">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        className="border border-black ml-3"
        value={valueName}
        onChange={handleChange}
      ></input>
        <label for="Email">Email:</label>
      <input
        type="text"
        id="Email"
        name="Email"
        className="border border-black ml-3"
        value={valueName}
        onChange={handleChange}
      ></input>
   <label for="Phone">Phone:</label>
      <input
        type="text"
        id="Phone"
        name="Phone"
        className="border border-black ml-3"
        value={valueName}
        onChange={handleChange}
      ></input>
        <label for="Primary POC Name">Primary POC Name:</label>
      <input
        type="text"
        id="Primary POC Name"
        name="Primary POC Name"
        className="border border-black ml-3"
        value={valueName}
        onChange={handleChange}
      ></input>
      <label for="Additional POC Name">Additional POC Name:</label>
      <input
        type="text"
        id="Additional POC Name"
        name="Additional POC Name"
        className="border border-black ml-3"
        value={valueName}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Name;
