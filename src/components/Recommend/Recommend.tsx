import React from "react";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const Recommend = () => {
  return (
    <Box
      width="216px"
      height="144px"
      ml="32px"
      sx={{ backgroundColor: "#2E2E2E" }}
    >
      <Typography
        sx={{ color: "yellow", textAlign: "center" }}
        variant="h1"
        mt="24px"
        ml="8px"
      >
        RECOMMENDED COLUMN
      </Typography>
      <Divider sx={{ marginTop: "10px", width: "30%", marginLeft: "74px" }} />
      <Typography sx={{ color: "white", textAlign: "center" }} mt="8px">
        オススメ
      </Typography>
    </Box>
  );
};

export default Recommend;
