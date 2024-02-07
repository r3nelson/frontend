const DisclosureCriteria = () => {
  return (
    <div>
      <div>
        <p className="text-xs m-3">
          Provide sufficent context so FDO can make determination or it will be
          returned for additional info
        </p>
        <div className="m-2 flex flex-col">
          <label htmlFor="Who is the Intended Audience?">
            Who is the Intended Audience?
          </label>
          <textarea
            type="text"
            id="Who is the Intended Audience?"
            name="Who is the Intended Audience?"
          />
        </div>
        <div className="m-2 flex flex-col">
          <label htmlFor="What is the Nature of the Information Contained in This Request?">
            What is the Nature of the Information Contained in This Request?
          </label>
          <textarea
            type="text"
            id="What is the Nature of the Information Contained in This Request?"
            name="What is the Nature of the Information Contained in This Request?"
          />
        </div>
        <div className="m-2 flex flex-col">
          <label htmlFor="Why Should We Share This Info?">
            Why Should We Share This Info?
          </label>
          <textarea
            type="text"
            id="Why Should We Share This Info?"
            name="Why Should We Share This Info?"
          />
        </div>
        <div className="m-2 flex flex-col">
          <label for="yesNoSelect">
            Did the Desired Recipents Request This Information:
          </label>
          <select id="yesNoSelect" name="yesNoSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DisclosureCriteria;
