const example_values = ["G1", "G2", "G3", "G4", "G5", "G6", "G8"];
const Office = () => {
  return (
    <div className="m-5">
      <label>Office:</label>
      <select className="border border-black ml-3" name="Office" id="Office">
        {example_values.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Office;
