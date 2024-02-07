const DesiredRecipents = () => {
  return (
    <div className="m-5">
      <label>Desired Recipents:</label>
      <div className="flex flex-col border border-black bg-white">
        <div className="flex justify-between m-2">
          <div>
            <input type="checkbox" name="FVEY" id="FVEY" />
            <label className="ml-2" htmlFor="FVEY">
              FVEY
            </label>
          </div>
        </div>
        <div className="flex justify-between m-2">
          <div>
            <input type="checkbox" name="AUS" id="AUS" />
            <label className="ml-2" htmlFor="AUS">
              AUS
            </label>
          </div>
        </div>
        <div className="flex justify-between m-2">
          <div>
            <input type="checkbox" name="CAN" id="CAN" />
            <label className="ml-2" htmlFor="CAN">
              CAN
            </label>
          </div>
        </div>
        <div className="flex justify-between m-2">
          <div>
            <input type="checkbox" name="GBR" id="GBR" />
            <label className="ml-2" htmlFor="GBR">
              GBR
            </label>
          </div>
        </div>
        <div className="flex justify-between m-2">
          <div>
            <input type="checkbox" name="NATO" id="NATO" />
            <label className="ml-2" htmlFor="NATO">
              NATO
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesiredRecipents;
