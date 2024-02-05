import { useState } from "react";

const Task = ({ name, fields }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isColor, setIsColor] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const toggleColor = () => {
    setIsColor(!isColor);
  };

  const toggleElements = () => {
    toggleVisibility();
    toggleColor();
  };
  return (
    <div
      onClick={toggleElements}
      className={`${
        isColor ? "bg-neutral-400" : ""
      } text-center p-5 border-b-2 border-black`}
    >
      {name}
      <div className={`${isHidden ? "hidden" : ""} `}>{fields}</div>
    </div>
  );
};

export default Task;
