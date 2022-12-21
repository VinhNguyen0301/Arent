import React from "react";
import food from "../assets/Photo/photo/d01.jpg";
import { Box, styled } from "@mui/material";

const ImageBackground = styled("img")(({ theme }) => ({
  width: "540px",
  maxHeight: "100%",
  objectFit: "none",
  height: "312px",
  position: "relative",
  [theme.breakpoints.down("sm")]: {
    width: "390px",
  },
}));

const CircleDiagramStyled = styled("div")(({ theme }) => ({
  transform: "rotate(268deg)",
  position: "absolute",
  top: "0",
  marginLeft: "85px",
  marginTop: "22px",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "18px",
    marginTop: "0px",
  },
}));

const CircleGraph = () => {
  return (
    <Box>
      <ImageBackground src={food} />
      <CircleDiagramStyled>
        <svg
          viewBox="0 0 100 100"
          style={{
            strokeDasharray: "110",
            strokeDashoffset: "0",
            width: "350px",
          }}
        >
          <circle cx="50" cy="50" r="23" stroke="white" fill="none" />
        </svg>
      </CircleDiagramStyled>
      {/* <span>05/21 75%</span>*/}
    </Box>
  );
};

export default CircleGraph;
