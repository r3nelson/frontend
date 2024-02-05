const example_values = ["option1", "option2", "option3"];
const OverallClassification = () => {
  return (
    <div className="m-5">
      <label>Overall Classification:</label>
      <select
        className="border border-black ml-3"
        name="Overall Classification"
        id="Overall Classification"
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

export default OverallClassification;
