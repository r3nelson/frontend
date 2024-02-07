import ProductType from "./taskFields/selects/ProductType";
import Email from "./taskFields/inputs/Email";
import Phone from "./taskFields/inputs/Phone";
import Name from "./taskFields/inputs/Name";
import PrimaryPocName from "./taskFields/inputs/PrimaryPocName";
import Command from "./taskFields/selects/Command";
import Office from "./taskFields/selects/Office";
import AdditionalPocName from "./taskFields/inputs/AdditionalPocName";
import IntendedDateOfDisclosure from "./taskFields/inputs/IntendedDateOfDisclosure";
import IntendedUse from "./taskFields/selects/IntendedUse";
import MethodOfDisclosure from "./taskFields/inputs/MethodOfDisclosure";
import DesiredRecipents from "./taskFields/selects/DesiredRecipents";
import DisclosureCriteria from "./taskFields/inputs/DisclosureCriteria";
import Task from "./Task";
import Button from "./Button";
import ProductTitle from "./taskFields/inputs/ProductTitle";
import CurrentClassification from "./taskFields/selects/CurrentClassification";
import UploadProduct from "./taskFields/upload/UploadProduct";
import FinalCheckAndAcknowledge from "./taskFields/selects/FinalCheckAndAcknowledge";

const TaskContainer = () => {
  return (
    <div className="border-2 border-black w-96 bg-blue-700 ">
      <Task
        heading={"Requester Information"}
        fields={[
          <Name />,
          <Command />,
          <Office />,
          <Email />,
          <Phone />,
          <PrimaryPocName />,
          <AdditionalPocName />,
        ]}
      />
      <Task
        heading={"Request Details"}
        fields={[
          <ProductType />,
          <IntendedUse />,
          <IntendedDateOfDisclosure />,
          <MethodOfDisclosure />,
          <DesiredRecipents />,
        ]}
      />
      <Task heading={"Disclosure Criteria"} fields={<DisclosureCriteria />} />
      <Task
        heading={"Product Details"}
        fields={[
          <ProductTitle />,
          <CurrentClassification />,
          <UploadProduct />,
        ]}
      />

      <Task
        heading={"Final Check and Acknowledge"}
        fields={<FinalCheckAndAcknowledge />}
      />

      <div className="flex justify-center m-2 p-5">
        <Button text={"Save as Draft"} color={"bg-yellow-500"} />
        <Button text={"Submit"} color={"bg-red-500"} />
      </div>
    </div>
  );
};

export default TaskContainer;
