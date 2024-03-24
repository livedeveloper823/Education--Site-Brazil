import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import { useSelector, useDispatch } from "../../store/index";
import { getStudentRank } from "../../store/reducers/rankingdata";

export default function ChartMonth(props) {
  const RankData = useSelector((state) => state.rankingdata);
  const dispatch = useDispatch();
  const correctAnswers = props.monthCorrect;
  const data = [
    ["Task", "Hours per Day"],
    [`Jogos feito(${correctAnswers})`, correctAnswers],
    [`Total(200)`, 200 - correctAnswers],
  ];
  const options = {
    title: "Meta Mensal",
    pieHole: 0.5,
    is3D: false,
    colors: ["rgb(34, 197, 64)", "#feda32"],
    legend: {
      textStyle: {
        fontSize: 18,
      },
    },
    titleTextStyle: {
      // i.e. 'Times New Roman'
      fontSize: 18,
    },
    hAxis: {
      textStyle: {
        fontSize: 24, // or the number you want
      },
    },
    sliceVisibilityThreshold:0
  };
  useEffect(() => {
    dispatch(getStudentRank());
  }, []);

  return (
    <div>
      <Chart
        // className="md:w-[570px] md:h-[300px]"
        className="md:h-[400px] "
        chartType="PieChart"
        data={data}
        options={options}
      />
    </div>
  );
}
