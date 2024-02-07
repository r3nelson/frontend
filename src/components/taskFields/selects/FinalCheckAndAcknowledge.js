const FinalCheckAndAcknowledge = () => {
  return (
    <div>
      <div className="m-3 border border-black">
        <ul>
          <li className="m-2">You have provided all source documentation</li>
          <li className="m-2">Your Product is Married IAN</li>
          <li className="m-2">Attach link to Manual Document here</li>
        </ul>
      </div>
      <label>
        I have reviewed my submission and assert my request is ready to submit
      </label>
      <input
        className="ml-2"
        type="checkbox"
        id="acknowledgeCheckbox"
        name="acknowledge"
        value="acknowledge"
      ></input>
    </div>
  );
};

export default FinalCheckAndAcknowledge;
