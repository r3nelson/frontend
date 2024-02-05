const ProgressItem = ({ name, status }) => {
  return (
    <div>
      <div className="flex justify-between p-3 m-1  border-b-2 border-gray-600">
        <p>{name}</p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default ProgressItem;
