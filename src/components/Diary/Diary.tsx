import React from "react";
import { Box, Typography } from "@mui/material";

const Diary = () => {
  return (
    <Box
      width="231px"
      height="231px"
      sx={{ backgroundColor: "white", borderStyle: "double" }}
    >
      <div>2021.05.21</div>
      <div>23:25</div>
      <Box>
        <Typography>
          私の日記の記録が一部表示されます。
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Diary;
