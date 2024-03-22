import Chart from "react-google-charts";
import ChartMonth from "../../components/Student/ChartMonth";
import CastConnectedOutlinedIcon from "@mui/icons-material/CastConnectedOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import { useDispatch, useSelector } from "../../store/index";
import { getUserData } from "../../store/reducers/userdata";
import { useEffect } from "react";
import ChartDay from "../../components/Student/ChartWeek";

export const options = {
  title: "Respostas corretas",
  chartArea: { width: "70%" },
  hAxis: {
    title: "Taxa de sucesso",
    minValue: 0,
    textPosition: "none",
    viewWindow: {
      min: 0,
      max: 100,
    },
  },
  vAxis: {
    title: "Assuntos",
  },
  colors: ["#22ff69", "#552277"],
  titleTextStyle: {
    // i.e. 'Times New Roman'
    fontSize: 24,
  },
};
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
//Import date, day, month, year from local time
const longDate = new Date();
const year = longDate.getFullYear();
const month = longDate.getMonth() + 1;
const day = longDate.getDay();
const date = longDate.getDate();
let portAnswersNum;
let mathAnswersNum;
let dailyMathCorrection;
let dailyPortCorrection;
let totalMathCorrection;
let totalPortCorrection;

//Main function
const Dashboard = () => {
  //Chart Data
  const data = [
    ["City", "Taxa de sucesso"],
    [`Matemática ${totalMathCorrection / mathAnswersNum * 100}%`, totalMathCorrection],
    [`Português ${totalPortCorrection / portAnswersNum * 100}%`, totalPortCorrection],
  ];

  //Import Data from Database via redux
  const userdata = useSelector((state) => state.userdata);
  // correctQuestion numbers
  const correctQues = userdata.users.userAnswers;
  if (correctQues) {
    for (let i = 0; i < correctQues.length; i++) {
      const subject = correctQues[i].subject.subjectName;
      if (subject === "Matemática") {
        const mathAnswers = correctQues[i].answerQuestions;
        mathAnswersNum = mathAnswers.length
        for (let j = 0; j < mathAnswers.length; j++) {
          const mathAnswer = mathAnswers[j];
          const mathDate = new Date(mathAnswer.date);
          const mathDateYear = mathDate.getFullYear();
          const mathDateMonth = mathDate.getMonth() + 1;
          const mathDateDate = mathDate.getDate();
          const correctMathQuestions = correctQues[i].correctQuestions;
          dailyMathCorrection = correctMathQuestions.filter(
            () =>
              month == mathDateMonth &&
              year == mathDateYear &&
              date == mathDateDate
          ).length;
          totalMathCorrection = correctMathQuestions.filter(
            () => month == mathDateMonth && year == mathDateYear
          ).length;
        }
      } else {
        const portAnswers = correctQues[i].answerQuestions;
        portAnswersNum = portAnswers.length
        for (let j = 0; j < portAnswers.length; j++) {
          const portAnswer = portAnswers[j];
          const portDate = new Date(portAnswer.date);
          const portDateYear = portDate.getFullYear();
          const portDateMonth = portDate.getMonth() + 1;
          const portDateDate = portDate.getDate();
          const correctPortQuestions = correctQues[i].correctQuestions;
          dailyPortCorrection = correctPortQuestions.filter(
            () =>
              month == portDateMonth &&
              year == portDateYear &&
              date == portDateDate
          );
          totalPortCorrection = correctPortQuestions.filter(
            () => month == portDateMonth && year == portDateYear
          ).length;
        }
      }
    }
  }
  let totalCorrection = totalMathCorrection + totalPortCorrection;
  let dailyCorrection = dailyMathCorrection + dailyPortCorrection;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
  }, []);
  return (
    <div className="md:m-10 m-4">
      <div className="md:grid grid-cols-2 md:gap-20 mb-10">
        <div>
          <div className="flex bg-white items-center px-10 py-5 gap-10 mb-5 rounded-xl">
            <div className="bg-gray-300 p-3">
              <CastConnectedOutlinedIcon className="text-sky-800" />
            </div>
            <div>
              <div>Jogos finalizados pelos alunos</div>
              <div>1 Jogos</div>
            </div>
          </div>
          <ChartDay dailyCorrect={dailyCorrection} />
        </div>
        <div className="mt-10 md:mt-0">
          <div>
            <div className="flex bg-white items-center px-10 py-5 gap-10 mb-5 rounded-xl">
              <div className="bg-gray-300 p-3">
                <WatchOutlinedIcon className="text-sky-800" />
              </div>
              <div>
                <div>Jogos finalizados pelos alunos</div>
                <div>
                  {year}.{month}.{date}.{days[day]}
                </div>
              </div>
            </div>
          </div>
          <ChartMonth monthCorrect={totalCorrection} />
        </div>
      </div>
      <div>
        <Chart
          chartType="BarChart"
          width="100%"
          height="200px"
          data={data}
          options={options}
        />
      </div>
    </div>
  );
};

export default Dashboard;
