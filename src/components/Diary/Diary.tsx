import React from "react";
import { Box } from "@mui/material";

const Diary = () => {
  return (
    <Box>
      <div>My Diary</div>
      <Box width="231px" height="231px" sx={{ backgroundColor: "lightcyan" }}>
        <div>2021.05.21</div>
        <div>23:25</div>
      </Box>
    </Box>
  );
};

export default Diary;
