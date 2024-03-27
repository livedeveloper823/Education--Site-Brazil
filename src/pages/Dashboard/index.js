import Chart from "react-google-charts";
import ChartMonth from "../../components/Student/ChartMonth";
import CastConnectedOutlinedIcon from "@mui/icons-material/CastConnectedOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import { useSelector } from "../../store/index";
import ChartDay from "../../components/Student/ChartWeek";
import useTime from "../../hooks/useTimer";
import { TimeProvider } from "../../contexts/timeContext";

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
let portAnswersNum = 0;
let mathAnswersNum = 0;
let dailyMathCorrection = 0;
let dailyPortCorrection = 0;
let totalMathCorrection = 0;
let totalPortCorrection = 0;

//Main function
const Dashboard = () => {
  const CurrentTime = () => {
    const currentTime = useTime();

    return <div>Current Time: {currentTime.toLocaleTimeString()}</div>;
  };
  //Import Data from Database via redux
  const userdata = useSelector((state) => state.userdata);
  console.log(userdata);
  // correctQuestion numbers
  const correctQues = userdata.users.userAnswers;
  if (correctQues) {
    correctQues
      .filter((item) => item.subject.subjectName == "Matemática")
      .map((item) => {
        const totalMathQues = item.answerQuestions;
        const correctMathQues = item.correctQuestions;
        totalMathQues.map((item) => {
          const mathDate = new Date(item.date);
          const mathDateYear = mathDate.getFullYear();
          const mathDateMonth = mathDate.getMonth() + 1;
          // const mathDateDate = mathDate.getDate();
          if (month == mathDateMonth && year == mathDateYear) {
            mathAnswersNum++;
          }
        });
        correctMathQues.map((item) => {
          const mathDate = new Date(item.date);
          const mathDateYear = mathDate.getFullYear();
          const mathDateMonth = mathDate.getMonth() + 1;
          const mathDateDate = mathDate.getDate();
          if (
            month == mathDateMonth &&
            year == mathDateYear &&
            date == mathDateDate
          ) {
            dailyMathCorrection++;
          }
          if (month == mathDateMonth && year == mathDateYear) {
            totalMathCorrection++;
          }
        });
      });

    correctQues
      .filter((item) => item.subject.subjectName == "Português")
      .map((item) => {
        const correctPortQues = item.correctQuestions;
        const totalPortQues = item.answerQuestions;
        totalPortQues.map((item) => {
          const portDate = new Date(item.date);
          const portDateYear = portDate.getFullYear();
          const portDateMonth = portDate.getMonth() + 1;
          // const portDateDate = portDate.getDate();
          if (month === portDateMonth && year === portDateYear)
            portAnswersNum = portAnswersNum + 1;
        });
        correctPortQues.map((item) => {
          const portDate = new Date(item.date);
          const portDateYear = portDate.getFullYear();
          const portDateMonth = portDate.getMonth() + 1;
          const portDateDate = portDate.getDate();
          if (
            month === portDateMonth &&
            year === portDateYear &&
            date === portDateDate
          )
            dailyPortCorrection = dailyPortCorrection + 1;
          if (month == portDateMonth && year == portDateYear) {
            totalPortCorrection = totalPortCorrection + 1;
          }
          console.log(dailyPortCorrection, totalPortCorrection);
        });
      });
  }
  let totalCorrection = totalMathCorrection + totalPortCorrection;
  let dailyCorrection = dailyPortCorrection + dailyMathCorrection;
  let portSuccess = 0;  
  if (portAnswersNum != 0) {
    portSuccess = (totalPortCorrection / portAnswersNum) * 100;
  }
  let mathSuccess = 0;
  if (mathAnswersNum != 0){
    mathSuccess = (totalMathCorrection / mathAnswersNum) * 100;
  }
  //Chart Data
  const portData = [
    ["City", "Taxa de sucesso"],
    [`Português ${mathSuccess.toFixed(2)}%`, totalPortCorrection],
  ];
  const mathData = [
    ["City1", "Texa de sucesso"],
    [`Matemática ${portSuccess.toFixed(2)}%`, totalMathCorrection],
  ];

  const portOptions = {
    title: "Respostas corretas",
    chartArea: { width: "70%" },
    hAxis: {
      title: "Taxa de sucesso",
      minValue: 0,
      textPosition: "none",
      viewWindow: {
        min: 0,
        max: portAnswersNum,
      },
    },
    // vAxis: {
    //   title: "Assuntos",
    // },
    colors: ["#22ff69"],
    titleTextStyle: {
      // i.e. 'Times New Roman'
      fontSize: 24,
    },
  };
  const mathOptions = {
    title: "Respostas corretas",
    chartArea: { width: "70%" },
    hAxis: {
      title: "Taxa de sucesso",
      minValue: 0,
      textPosition: "none",
      viewWindow: {
        min: 0,
        max: mathAnswersNum,
      },
    },
    // vAxis: {
    //   title: "Assuntos",
    // },
    colors: ["#22ff69"],
    titleTextStyle: {
      // i.e. 'Times New Roman'
      fontSize: 24,
    },
  };
  return (
    <div className="md:m-10 m-4">
      <TimeProvider>
        <CurrentTime />
      </TimeProvider>
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
          height="100px"
          data={portData}
          options={portOptions}
        />
        <Chart
          chartType="BarChart"
          width="100%"
          height="100px"
          data={mathData}
          options={mathOptions}
        />
      </div>
    </div>
  );
};

export default Dashboard;
