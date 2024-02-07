import Circle from "../icons/Circle";

const StatusItem = ({ heading, count, color }) => {
  return (
    <div>
      <div className="flex justify-between p-2 m-1  border-b-2 border-gray-600">
        <p>{heading}</p>
        <Circle circleText={count} color={color} />
      </div>
    </div>
  );
};

export default StatusItem;
