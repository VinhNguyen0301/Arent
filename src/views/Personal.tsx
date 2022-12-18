import React from "react";
import { Grid, Box, Stack } from "@mui/material";
import recommend1 from "../assets/Photo/photo/MyRecommend-1.jpg";
import recommend2 from "../assets/Photo/photo/MyRecommend-2.jpg";
import recommend3 from "../assets/Photo/photo/MyRecommend-3.jpg";

const Personal = () => {
  return (
    <Box
      width="288px"
      height="288px"
      sx={{ backgroundColor: "#FFCC21" }}
      marginLeft="48px"
    >
      <img
        src={recommend1}
        style={{
          maxHeight: "100%",
          objectFit: "cover",
          width: "240px",
          height: "240px",
          margin: "24px",
        }}
      ></img>
    </Box>
  );
};

export default Personal;
