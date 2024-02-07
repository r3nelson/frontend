const name = () => {
  return (
    <div className="m-5">
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        className="border border-black ml-3"
      ></input>
    </div>
  );
};

export default name;
