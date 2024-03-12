import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
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

export default function ChartMonth() {
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
