import React from "react";
import Graph from "../components/Diagram/Graph";
import { Grid, Box, Stack } from "@mui/material";
import HexagonItem from "../components/Menu/MenuHexagon/HexagonItem";
import D1 from "./D1";

const Dashboard = () => {
  return (
    <Grid container spacing={2} maxWidth="1280px">
      <Grid maxHeight="312px" xs={5} sx={{ backgroundColor: "#2E2E2E" }}>
        <D1 />
      </Grid>
      <Grid xs={7}>
        <Graph />
      </Grid>
      <Grid xs={12}>
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <HexagonItem />
          <HexagonItem />
          <HexagonItem />
          <HexagonItem />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
