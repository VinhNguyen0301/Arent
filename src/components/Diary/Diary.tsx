import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const fakeData = [
  {
    date: "2021.05.21",
    time: "23:25",
    header: " 私の日記の記録が一部表示されます。",
    title:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    header: " 私の日記の記録が一部表示されます。",
    title:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    header: " 私の日記の記録が一部表示されます。",
    title:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    header: " 私の日記の記録が一部表示されます。",
    title:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    header: " 私の日記の記録が一部表示されます。",
    title:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    header: " 私の日記の記録が一部表示されます。",
    title:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    header: " 私の日記の記録が一部表示されます。",
    title:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
  {
    date: "2021.05.21",
    time: "23:25",
    header: " 私の日記の記録が一部表示されます。",
    title:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  },
];

const Diary = () => {
  return (
    <>
      {fakeData.map((data) => {
        return (
          <Box
            width="231px"
            height="231px"
            sx={{ backgroundColor: "white", borderStyle: "double" }}
          >
            <Grid ml="16px" mt="16px">
              <Typography variant="caption">{data.date}</Typography>
            </Grid>
            <Typography variant="caption" ml="16px">
              {data.time}
            </Typography>
            <Box width="200px" height="132px" ml="16px" mt="8px">
              <Typography variant="subtitle2">{data.header}</Typography>
              <Typography variant="subtitle2">{data.title}</Typography>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default Diary;
