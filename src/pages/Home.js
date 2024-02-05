import Navbar from "../components/Navbar";
import TaskContainer from "../components/TaskContainer";
import ApprovalContainer from "../components/statusFields/ApprovalContainer";
import ProgressContainer from "../components/statusFields/ProgressContainer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        <ApprovalContainer />
        <TaskContainer />
        <ProgressContainer />
      </div>
    </div>
  );
};

export default Home;
