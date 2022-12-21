import React from "react";
import Graph from "../components/Diagram/Graph";
import { Grid, Box, Stack, styled } from "@mui/material";
import HexagonItem from "../components/Menu/MenuHexagon/HexagonItem";
import CircleGraph from "./CircleGraph";
import MenuItem from "../components/Menu/MenuItem/MenuItem";

const MenuBoxStyled = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-evenly",

  [theme.breakpoints.down("sm")]: {
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(2, 1fr)",
    marginLeft: "50%",
  },
}));

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={5} sx={{ backgroundColor: "#2E2E2E" }}>
        <CircleGraph />
      </Grid>
      <Grid xs={7} sx={{ backgroundColor: "#2E2E2E" }}>
        <Graph />
      </Grid>

      <Grid xs={12}>
        <MenuBoxStyled>
          <HexagonItem />
        </MenuBoxStyled>
      </Grid>
      {/* <Grid xs={12} mt="30px" marginBottom="114px">
        <MenuItem />
      </Grid> */}
    </Grid>
  );
};

export default Dashboard;
