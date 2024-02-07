const example_values = ["UNCLASSIFIED", "CUI", "CONFIDIENTIAL", "SECRET"];
const CurrentClassification = () => {
  return (
    <div className="m-5">
      <label>Current Classification:</label>
      <select
        className="border border-black ml-3"
        name="Current Classification"
        id="Current Classification"
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

export default CurrentClassification;
