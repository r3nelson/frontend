

const ProgressItem = ({ heading, status }) => {
  let color = null;
  if (status === "Not started") color = "text-red-600";
  else if (status === "In progress") color = "text-yellow-600";
  else if (status === "Done") color = "text-green-600";
  return (
    <div>
      <div className="flex justify-between p-3 m-1  border-b-2 border-gray-600">
        <p>{heading}</p>
        <p className={color}>{status}</p>
      </div>
    </div>
  );
};

export default ProgressItem;
