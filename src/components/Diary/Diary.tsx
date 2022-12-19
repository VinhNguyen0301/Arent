import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const Diary = () => {
  return (
    <Box
      width="231px"
      height="231px"
      sx={{ backgroundColor: "white", borderStyle: "double" }}
    >
      <Grid ml="16px" mt="16px">
        <Typography variant="caption">2021.05.21</Typography>
      </Grid>
      <Typography variant="caption" ml="16px">
        23:25
      </Typography>
      <Box width="200px" height="132px" ml="16px" mt="8px">
        <Typography variant="subtitle2">
          私の日記の記録が一部表示されます。
        </Typography>
        <Typography variant="subtitle2">
          テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default Diary;
