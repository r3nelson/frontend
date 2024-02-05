const example_values = ["option1", "option2", "option3"];
const Organization = () => {
  return (
    <div className="m-5">
      <label>Organization:</label>
      <select
        className="border border-black ml-3"
        name="organization"
        id="organization"
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

export default Organization;
