import ChartMonth from "../../components/Student/ChartMonth";
import ChartWeek from "../../components/Student/ChartWeek";
import CastConnectedOutlinedIcon from "@mui/icons-material/CastConnectedOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";

const Dashboard = () => {
  return (
    <div className="md:m-20 m-4">
      <div className="md:grid grid-cols-2 md:gap-20 mb-10">
        <div>
          <div className="flex bg-white items-center px-10 py-5 gap-10 mb-5 rounded-xl">
            <div className="bg-gray-300 p-3">
              <CastConnectedOutlinedIcon className="text-sky-800" />
            </div>
            <div>
              <div>Jogos finalizados pelos alunas</div>
              <div>1 Jogos</div>
            </div>
          </div>
          <ChartWeek />
          <div className="md:flex md:gap-10 bg-white md:mt-20 mt-5 md:text-xl px-5 md:px-10 md:py-12 rounded-xl">
            <div>Total Question Num: 23</div>
            <div>Answer Num: 23</div>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <div>
            <div className="flex bg-white items-center px-10 py-5 gap-10 mb-5 rounded-xl">
              <div className="bg-gray-300 p-3">
                <WatchOutlinedIcon className="text-sky-800" />
              </div>
              <div>
                <div>Jogos finalizados pelos alunas</div>
                <div>1 Jogos</div>
              </div>
            </div>
          </div>
          <ChartMonth />
          <div className="md:flex md:gap-10 bg-white md:mt-20 md:text-xl md:px-10 md:py-12 rounded-xl">
            <div>Total Question Num: 23</div>
            <div>Answer Num: 23</div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
