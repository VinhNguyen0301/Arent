import { Grid, styled } from "@mui/material";
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
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    x: {
      grid: {
        color: "#777777",
      },
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
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

const GraphStyled = styled("div")(({ theme }) => ({
  height: "312px",
  width: "100%",
  marginLeft: "207px",
  backgroundColor: "#2E2E2E",
  maxWidth: "960px",

  [theme.breakpoints.down("sm")]: {
    width: "390px",
    height: "220px",
    marginTop: "15px",
    marginLeft: "0px",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "960px",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "960px",
  },
}));

const Graph2 = () => {
  return (
    <Grid container>
      <GraphStyled>
        <Line
          options={options}
          data={data}
          style={{
            backgroundColor: "#2E2E2E",
            marginLeft: "61px",
          }}
        />
      </GraphStyled>
    </Grid>
  );
};

export default Graph2;
