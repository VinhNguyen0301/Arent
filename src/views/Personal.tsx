import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import recommend1 from "../assets/Photo/photo/MyRecommend-1.jpg";
import recommend2 from "../assets/Photo/photo/MyRecommend-2.jpg";
import recommend3 from "../assets/Photo/photo/MyRecommend-3.jpg";

const fakeData = [
  {
    header: "BODY RECORD",
    title: "自分のカラダの記録",
    img: recommend1,
  },
  {
    header: "MY EXERCISE",
    title: "自分の運動の記録",
    img: recommend2,
  },
  {
    header: "MY DIARY",
    title: "自分の日記",
    img: recommend3,
  },
];

const Personal = () => {
  return (
    <>
      {fakeData.map((data) => {
        return (
          <Box
            width="288px"
            height="288px"
            sx={{ backgroundColor: "#FFCC21" }}
            marginLeft="48px"
          >
            <div
            // style={{
            //   backgroundColor: "#F2F2F2",
            //   width: "240px",
            //   height: "240px",
            // }}
            >
              <img
                src={data.img}
                style={{
                  maxHeight: "100%",
                  objectFit: "cover",
                  width: "240px",
                  height: "240px",
                  margin: "24px",
                }}
              ></img>
            </div>

            <Typography
              sx={{
                color: "#FFCC21",
                textAlign: "center",
                position: "absolute",
                top: "19%",
                marginLeft: "6%",
              }}
              variant="h1"
              mt="24px"
              ml="8px"
            >
              {data.header}
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

export default Personal;
