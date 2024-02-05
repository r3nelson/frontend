const example_values = ["option1", "option2", "option3"];
const RequestType = () => {
  return (
    <div className="m-5">
      <label>Request Type:</label>
      <select
        className="border border-black ml-3"
        name="Request Type"
        id="Request Type"
      >
        {example_values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RequestType;
