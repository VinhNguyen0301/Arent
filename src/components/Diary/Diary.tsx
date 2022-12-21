import React from "react";
import { Box, Typography, Grid, styled } from "@mui/material";

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

const MenuStyled = styled("div")(({ theme }) => ({
  // large >960px
  width: "231px",
  height: "231px",
  marginBottom: "12px",
  backgroundColor: "white",
  borderStyle: "double",

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

const Diary = () => {
  return (
    <>
      {fakeData.map((data) => {
        return (
          <MenuStyled>
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
          </MenuStyled>
        );
      })}
    </>
  );
};

export default Diary;
