import { useState } from "react";
import Circle from "./icons/Circle";

const Task = ({ heading, fields }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [isColor, setIsColor] = useState(false);
  const [circleText, setCircleText] = useState("+");

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  const toggleColor = () => {
    setIsColor(!isColor);
  };

  const toggleCircleText = () => {
    if (circleText === "+") setCircleText("-");
    else setCircleText("+");
  };

  const toggleElements = () => {
    toggleVisibility();
    toggleColor();
    toggleCircleText();
  };
  return (
    <div
      className={`${
        isColor ? "bg-neutral-400" : ""
      } text-center p-5 border-b-2 border-black`}
    >
      <div className="flex justify-between">
        {heading}
        <Circle
          handleClick={toggleElements}
          circleText={circleText}
          color="text-black"
        />
      </div>
      <div className={`${isHidden ? "hidden" : ""} `}>{fields}</div>
    </div>
  );
};

export default Task;
