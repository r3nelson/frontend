import ExplanationIcon from "../../icons/ExplanationIcon";

const MethodOfDisclosure = () => {
  return (
    <div className="m-5">
      <label>Method of Disclosure:</label>
      <div className="flex flex-col border border-black bg-white">
        <div className="flex justify-between m-2">
          <div>
            <input type="checkbox" name="Verbal" id="Verbal" />
            <label className="ml-2" htmlFor="Verbal">
              Verbal
            </label>
          </div>
          <ExplanationIcon explanation={"i.e. talking points"} />
        </div>
        <div className="flex justify-between m-2">
          <div>
            <input type="checkbox" name="Visual" id="Visual" />
            <label className="ml-2" htmlFor="Visual">
              Visual
            </label>
          </div>
          <ExplanationIcon explanation={"i.e. display only"} />
        </div>
        <div className="flex justify-between m-2">
          <div>
            <input type="checkbox" name="Release" id="Release" />
            <label className="ml-2" htmlFor="Release">
              Release
            </label>
          </div>
          <ExplanationIcon
            explanation={"i.e. electronic or physical transfer"}
          />
        </div>
      </div>
    </div>
  );
};

export default MethodOfDisclosure;
