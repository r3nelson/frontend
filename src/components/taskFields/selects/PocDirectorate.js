const example_values = ["option1", "option2", "option3"];
const PocDirectorate = () => {
  return (
    <div className="m-5">
      <label>POC directorate:</label>
      <select
        className="border border-black ml-3"
        name="POC Directorate"
        id="POC directorate"
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

export default PocDirectorate;
