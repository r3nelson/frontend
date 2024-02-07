import ProgressItem from "./ProgessItem";

const ProgressContainer = () => {
  return (
    <div className="mt-2 mr-5 w-96 border-2 border-gray-600">
      <ProgressItem heading={"Requester Information"} status={"Not started"} />
      <ProgressItem heading={"Request Details"} status={"Not started"} />
      <ProgressItem heading={"Disclosure Criteria"} status={"Not started"} />
      <ProgressItem heading={"Product Details"} status={"Not started"} />
      <ProgressItem
        heading={"Final Check and Acknowledge"}
        status={"Not started"}
      />
    </div>
  );
};

export default ProgressContainer;
