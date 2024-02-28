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
};

export default function ChartMonth() {
  return (
    <div>
      <Chart
      // className="md:w-[570px] md:h-[300px]"
      className="md:h-[300px]"
      chartType="PieChart"
      data={data}
      options={options}
    />
    </div>
  );
}
