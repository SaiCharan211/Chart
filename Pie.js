import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

const options = {
  title: "My Daily Activities",
};

function Line() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"70%"}
      height={"400px"}
    />
  );
}
export default Line