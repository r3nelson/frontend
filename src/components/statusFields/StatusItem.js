import Circle from "../icons/Circle";

const StatusItem = ({ name, count, color }) => {
  return (
    <div>
      <div className="flex justify-between p-2 m-1  border-b-2 border-gray-600">
        <p>{name}</p>
        <Circle count={count} color={color} />
      </div>
    </div>
  );
};

export default StatusItem;
