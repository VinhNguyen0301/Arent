import React from "react";
import { Grid, Box, Stack, Typography, Button } from "@mui/material";
import Recommend from "../components/Recommend/Recommend";
import MenuRecommend from "../components/Recommend/MenuRecommend";

const RecommendPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Box
          sx={{ flexDirection: "row", display: "flex", marginLeft: "160px" }}
          mt="56px"
        >
          <Recommend />
          <Recommend />
          <Recommend />
          <Recommend />
        </Box>
      </Grid>
      <Grid xs={12}>
        <Box
          sx={{ flexDirection: "row", display: "flex", marginLeft: "190px" }}
          mt="56px"
        >
          <MenuRecommend />
          <MenuRecommend />
          <MenuRecommend />
          <MenuRecommend />
        </Box>
      </Grid>
    </Grid>
  );
};

export default RecommendPage;
