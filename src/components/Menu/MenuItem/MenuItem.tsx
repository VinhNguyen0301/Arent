import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Button, Typography } from "@mui/material";

export default function MenuItem() {
  return (
    <Box ml="160px">
      <ImageList sx={{ width: 960, height: 467 }} cols={4} rowHeight={234}>
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
              05.21.Morning
            </Typography>

            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        style={{
          background:
            "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
          width: "296px",
          height: "56px",
          marginTop: "28px",
          marginLeft: "27%",
        }}
      >
        記録をもっと見る
      </Button>
    </Box>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
  },
];
