import React, { useState } from "react";

const ExplanationIcon = ({ explanation }) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
  };

  return (
    <div className="flex">
      <div
        onClick={handleClick}
        className={`w-5 h-5 rounded-full flex items-center justify-center text-m font-bold bg-blue-300`}
      >
        i
      </div>
      {isClicked ? <p className="ml-1 text-s">{explanation}</p> : null}
    </div>
  );
};

export default ExplanationIcon;
