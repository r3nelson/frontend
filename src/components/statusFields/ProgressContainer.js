import React, { useState, useEffect } from "react";
import ProgressItem from "./ProgessItem";
import Name from "../taskFields/inputs/Name";


const ProgressContainer = () => {
  const [integerValueName, setIntegerValueName] = useState(0);
  const [status, setStatus] = useState("Not started");

  useEffect(() => {
    // Function to set status based on the value of integerValueName
    const setStatusFromValue = () => {
      if (integerValueName === 0) {
        setStatus("Not started");
      } else if (integerValueName === 1) {
        setStatus("In progress");
      } else if (integerValueName === 2) {
        setStatus("Completed");
      }
    };

    // Call the function initially and whenever integerValueName changes
    setStatusFromValue();
  }, [integerValueName]);

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
