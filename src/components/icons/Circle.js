const Circle = ({ count, color }) => {
  return (
    <div
      className={`${color} w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-m font-bold`}
    >
      {count}
    </div>
  );
};

export default Circle;
