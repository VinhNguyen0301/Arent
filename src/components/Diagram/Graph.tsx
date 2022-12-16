import { Box } from "@mui/material";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  " Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [80, 53, 85, 41, 44, 65, 10, 8, 9, 10, 11, 12],
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
    },
    {
      label: "Dataset 2",
      data: [80, 25, 35, 51, 54, 76, 10, 8, 9, 10, 11, 12],
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

const Graph = () => {
  return (
    <Box height="800px" width="800px">
      <Line options={options} data={data} />
    </Box>
  );
};

export default Graph;
