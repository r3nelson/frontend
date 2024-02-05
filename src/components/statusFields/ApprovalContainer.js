import StatusItem from "./StatusItem";

const ApprovalContainer = () => {
  return (
    <div className="mt-2 ml-5 w-96 border-2 border-gray-600">
      <StatusItem name={"Drafts"} count={0} color={"bg-blue-700"} />
      <StatusItem name={"Rework"} count={0} color={"bg-yellow-700"} />
      <StatusItem name={"Cancelled"} count={0} color={"bg-red-700"} />
      <StatusItem name={"Disapproved"} count={0} color={"bg-red-700"} />
      <StatusItem name={"In progress"} count={0} color={"bg-blue-700"} />
      <StatusItem name={"Approved"} count={0} color={"bg-green-700"} />
      <StatusItem
        name={"Approved with modifications"}
        count={0}
        color={"bg-gren-700"}
      />
      <StatusItem
        name={"Requests requiring my cordination"}
        count={0}
        color={"bg-purple-700"}
      />
    </div>
  );
};

export default ApprovalContainer;
