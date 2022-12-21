import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button, Typography, styled } from "@mui/material";
import m01 from "../../../assets/Photo/photo/m01.jpg";
import m02 from "../../../assets/Photo/photo/m02.jpg";
import m03 from "../../../assets/Photo/photo/m03.jpg";
import s01 from "../../../assets/Photo/photo/s01.jpg";
import d02 from "../../../assets/Photo/photo/d02.jpg";
import l01 from "../../../assets/Photo/photo/l01.jpg";
import l02 from "../../../assets/Photo/photo/l02.jpg";

const MenuStyled = styled("div")(({ theme }) => ({
  // large >960px
  width: "1280px",
  marginLeft: "200px",

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
  },
}));

const ButtonStyled = styled("button")(({ theme }) => ({
  // large >960px
  background: "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
  width: "296px",
  height: "56px",
  marginTop: "28px",
  borderRadius: "7px",
  borderColor: "#FFCC21",
  color: "white",
  fontSize: "18px",
  fontWeight: "300px",
  marginLeft: "40%",

  [theme.breakpoints.between("md", "lg")]: {
    marginLeft: "40%",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    marginLeft: "40%",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "50px",
  },
}));

export default function MenuItem() {
  return (
    <Box>
      <MenuStyled>
        <ImageList sx={{ height: 467 }} cols={4} rowHeight={234}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              style={{
                position: "relative",
                marginBottom: "8px",
                marginLeft: "8px",
              }}
            >
              <Typography
                style={{
                  position: "absolute",
                  bottom: "0px",
                  left: "0px",
                  backgroundColor: "yellow",
                }}
              >
                {item.title}
              </Typography>

              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                width="234px !important"
                height="234px !important"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </MenuStyled>

      <ButtonStyled>記録をもっと見る</ButtonStyled>
    </Box>
  );
}

const itemData = [
  {
    img: m01,
    title: "05.21.Morning",
  },
  {
    img: m02,
    title: "05.21.Lunch",
  },
  {
    img: m03,
    title: "05.21.Dinner",
  },
  {
    img: s01,
    title: "05.21.Snack",
  },
  {
    img: d02,
    title: "05.20.Morning",
  },
  {
    img: l01,
    title: "05.20.Lunch",
  },
  {
    img: l02,
    title: "05.20.Dinner",
  },
  {
    img: m01,
    title: "05.21.Snack",
  },
  {
    img: m02,
    title: "Mushrooms",
  },
  {
    img: l01,
    title: "Tomato basil",
  },
  {
    img: l02,
    title: "Sea star",
  },
  {
    img: d02,
    title: "Bike",
  },
];
