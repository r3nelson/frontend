import Organization from "./taskFields/selects/Organization";
import OverallClassification from "./taskFields/selects/OverallClassification";
import ProductType from "./taskFields/selects/ProductType";
import RequestType from "./taskFields/selects/RequestType";
import RequestTitle from "./taskFields/inputs/RequestTitle";
import Email from "./taskFields/inputs/Email";
import Phone from "./taskFields/inputs/Phone";
import PocName from "./taskFields/inputs/PocName";
import PocDirectorate from "./taskFields/selects/PocDirectorate";
import AdditionalPoc from "./taskFields/inputs/AdditionalPoc";
import Task from "./Task";
import Button from "./Button";

const TaskContainer = () => {
  return (
    <div className="border-2 border-black w-96 bg-blue-700 ">
      <Task name={"General"} fields={[<Email />, <Phone />]} />
      <Task name={"Organization"} fields={<Organization />} />
      <Task
        name={"POC Information"}
        fields={[<PocName />, <PocDirectorate />, <AdditionalPoc />]}
      />
      <Task
        name={"Request Information"}
        fields={[<RequestTitle />, <RequestType />, <ProductType />]}
      />

      <Task name={"Classification"} fields={<OverallClassification />} />

      <div className="flex justify-center m-2 p-5">
        <Button text={"Save as Draft"} color={"bg-yellow-500"} />
        <Button text={"Submit"} color={"bg-red-500"} />
      </div>
    </div>
  );
};

export default TaskContainer;
