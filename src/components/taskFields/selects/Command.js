const example_values = ["USARPACHQ", "25ID", "IMDTF"];
const Command = () => {
  return (
    <div className="m-5">
      <label>Command:</label>
      <select className="border border-black ml-3" name="Command" id="Command">
        {example_values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Command;
