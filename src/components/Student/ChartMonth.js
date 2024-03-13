import React, {useEffect} from "react";
import { Chart } from "react-google-charts";
import { useSelector, useDispatch } from "../../store/index";
import { getStudentRank } from "../../store/reducers/rankingdata";

export default function ChartMonth() {
  const RankData = useSelector((state) => state.rankingdata);
  const dispatch = useDispatch();
  const data = [
    ["Task", "Hours per Day"],
    ["Certo", 20],
    ["Errado", 200],
    // ["Certo", RankData.studentRankings.portRank.score + RankData.studentRankings.mathRank.score],
    // ["Errado", 200 -RankData.studentRankings.portRank.score - RankData.studentRankings.mathRank.score],
  ];
  const options = {
    title: "Meta Mensal",
    pieHole: 0.5,
    is3D: false,
    colors: ["rgb(34, 197, 64)", "#feda32"],
    legend: {
      textStyle: {
        fontSize: 26,
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
