const example_values = ["option1", "option2", "option3"];
const ProductType = () => {
  return (
    <div className="m-5">
      <label>Product Type:</label>
      <select
        className="border border-black ml-3"
        name="Product Type"
        id="Product Type"
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

export default ProductType;
