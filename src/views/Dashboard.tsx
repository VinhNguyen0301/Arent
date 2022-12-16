import React from "react";
import { Box, Stack } from "@mui/material";
import food from "../assets/Photo/photo/d01.jpg";

const Dashboard = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box maxWidth="540px" sx={{ backgroundColor: "gray" }}>
        {/* <img
          src="https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_1280.jpg"
          width="540px"
          height="316px"
        ></img> */}
        <img src={food} width="540px" height="316px"></img>
      </Box>
      <Box sx={{ backgroundColor: "gray" }} width="100%">
        Line chart component
      </Box>
    </Stack>
  );
};

export default Dashboard;
