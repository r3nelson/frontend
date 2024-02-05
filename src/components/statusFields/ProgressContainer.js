import ProgressItem from "./ProgessItem";

const ProgressContainer = () => {
  return (
    <div className="mt-2 mr-5 w-96 border-2 border-gray-600">
      <ProgressItem name={"Drafts"} status={"Not started"} />
      <ProgressItem name={"Rework"} status={"Not started"} />
      <ProgressItem name={"Cancelled"} status={"Not started"} />
      <ProgressItem name={"Disapproved"} status={"Not started"} />
      <ProgressItem name={"In progress"} status={"Not started"} />
      <ProgressItem name={"Approved"} status={"Not started"} />
      <ProgressItem
        name={"Approved with modifications"}
        status={"Not started"}
      />
      <ProgressItem
        name={"Requests requiring my cordination"}
        status={"Not started"}
      />
    </div>
  );
};

export default ProgressContainer;
