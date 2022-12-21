import React from "react";
import { Box, Typography, styled } from "@mui/material";
import Divider from "@mui/material/Divider";

const fakeData = [
  {
    header: "RECOMMENDED COLUMN",
    title: "オススメ",
  },
  {
    header: "RECOMMENDED DIET",
    title: "オススメ",
  },
  {
    header: "RECOMMENDED BEAUTY",
    title: "オススメ",
  },
  {
    header: "RECOMMENDED HEALTH",
    title: "健康",
  },
];

const MenuStyled = styled("div")(({ theme }) => ({
  // large >960px
  width: "216px",
  height: "144px",
  marginLeft: "32px",
  backgroundColor: "#2E2E2E",

  // [theme.breakpoints.between("md", "lg")]: {
  //   width: "960px",
  //   marginLeft: "145px",
  // },
  // [theme.breakpoints.between("lg", "xl")]: {
  //   width: "1000px",
  //   marginLeft: "130px",
  // },
  [theme.breakpoints.down("sm")]: {
    width: "190px",
    marginLeft: "0px",
    marginBottom: "5px",
  },
}));

const Recommend = () => {
  return (
    <>
      {fakeData.map((data) => {
        return (
          <MenuStyled>
            <Typography
              sx={{ color: "#FFCC21", textAlign: "center" }}
              variant="h1"
              mt="24px"
              ml="8px"
            >
              {data.header}
            </Typography>
            <Divider
              sx={{ marginTop: "10px", width: "30%", marginLeft: "74px" }}
            />
            <Typography sx={{ color: "white", textAlign: "center" }} mt="8px">
              {data.title}
            </Typography>
          </MenuStyled>
        );
      })}
    </>
  );
};

export default Recommend;
