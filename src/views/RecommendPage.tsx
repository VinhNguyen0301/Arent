import React from "react";
import { Grid, Box, styled } from "@mui/material";
import Recommend from "../components/Recommend/Recommend";
import MenuRecommend from "../components/Recommend/MenuRecommend";

const MenuStyled = styled("div")(({ theme }) => ({
  // large >960px
  flexDirection: "row",
  display: "flex",
  marginLeft: "20%",
  marginTop: "56px",

  [theme.breakpoints.between("md", "lg")]: {
    width: "960px",
    marginLeft: "145px",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "1000px",
    marginLeft: "130px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "390px",
    marginLeft: "0px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

const MenuRecommendStyled = styled("div")(({ theme }) => ({
  flexDirection: "row",
  display: "grid",
  marginLeft: "21%",
  gridTemplateColumns: "repeat(4, 1fr)",
  marginTop: "56px",

  [theme.breakpoints.between("md", "lg")]: {
    width: "960px",
    marginLeft: "145px",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    width: "1000px",
    marginLeft: "130px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "390px",
    marginLeft: "0px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

const RecommendPage = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <MenuStyled>
          <Recommend />
        </MenuStyled>
      </Grid>
      <MenuRecommendStyled>
        <MenuRecommend />
      </MenuRecommendStyled>
    </Grid>
  );
};

export default RecommendPage;
