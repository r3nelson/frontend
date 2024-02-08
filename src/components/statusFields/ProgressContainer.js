import React, { useState, useContext } from "react";
import ProgressItem from "./ProgessItem";
import NameContext from "../taskFields/inputs/Name";


const ProgressContainer = () => {
  const [integerValueName, setIntegerValueName] = useState(0);
  const [status, setStatus] = useState("Not started");

  const setStatus = () => {
    
  }

// console.log(integerValueName)

  return (
    <div className="mt-2 mr-5 w-96 border-2 border-gray-600">
      <ProgressItem heading={"Requester Information"} status={"Not started"} />
      <ProgressItem heading={"Request Details"} status={"Not started"} />
      <ProgressItem heading={"Disclosure Criteria"} status={"Not started"} />
      <ProgressItem heading={"Product Details"} status={"Not started"} />
      <ProgressItem
        heading={"Final Check and Acknowledge"}
        status={"Not started"}
      />
    </div>
  );
};

export default ProgressContainer;
