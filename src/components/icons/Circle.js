const Circle = ({ circleText, color, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className={`${color} w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-m font-bold`}
    >
      {circleText}
    </div>
  );
};

export default Circle;
