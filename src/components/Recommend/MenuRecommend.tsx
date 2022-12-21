import React from "react";
import { Box, Typography, styled } from "@mui/material";
import col1 from "../../assets/Photo/photo/column-1.jpg";
import col2 from "../../assets/Photo/photo/column-2.jpg";
import col3 from "../../assets/Photo/photo/column-3.jpg";
import col4 from "../../assets/Photo/photo/column-4.jpg";
import col5 from "../../assets/Photo/photo/column-5.jpg";
import col6 from "../../assets/Photo/photo/column-6.jpg";
import col7 from "../../assets/Photo/photo/column-7.jpg";
import col8 from "../../assets/Photo/photo/column-8.jpg";

const fakeData = [
  {
    time: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    titleInfo: "#魚料理  #和食  #DHA",
    img: col1,
  },
  {
    time: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    titleInfo: "#魚料理  #和食  #DHA",
    img: col2,
  },
  {
    time: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    titleInfo: "#魚料理  #和食  #DHA",
    img: col3,
  },
  {
    time: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    titleInfo: "#魚料理  #和食  #DHA",
    img: col4,
  },
  {
    time: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    titleInfo: "#魚料理  #和食  #DHA",
    img: col5,
  },
  {
    time: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    titleInfo: "#魚料理  #和食  #DHA",
    img: col6,
  },
  {
    time: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    titleInfo: "#魚料理  #和食  #DHA",
    img: col7,
  },
  {
    time: "2021.05.17   23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    titleInfo: "#魚料理  #和食  #DHA",
    img: col8,
  },
];

const MenuStyled = styled("div")(({ theme }) => ({
  // large >960px
  width: "234px",
  height: "144.47px",
  marginLeft: "20px",
  marginBottom: "77px",

  // [theme.breakpoints.between("md", "lg")]: {
  //   width: "960px",
  //   marginLeft: "145px",
  // },
  // [theme.breakpoints.between("lg", "xl")]: {
  //   width: "1000px",
  //   marginLeft: "130px",
  // },
  [theme.breakpoints.down("sm")]: {
    width: "170px",
    marginLeft: "0px",
  },
}));
const BoxStyled = styled("div")(({ theme }) => ({
  // large >960px
  width: "234px",
  height: "144.47px",
  marginLeft: "8px",
  position: "relative",

  // [theme.breakpoints.between("md", "lg")]: {
  //   width: "960px",
  //   marginLeft: "145px",
  // },
  // [theme.breakpoints.between("lg", "xl")]: {
  //   width: "1000px",
  //   marginLeft: "130px",
  // },
  [theme.breakpoints.down("sm")]: {
    width: "170px",
    marginLeft: "0px",
    marginBottom: "10px",
  },
}));

const MenuRecommend = () => {
  return (
    <>
      {fakeData.map((data) => {
        return (
          <MenuStyled>
            <BoxStyled>
              <img
                src={data.img}
                style={{
                  maxHeight: "100%",
                  position: "relative",
                }}
              ></img>

              <Typography
                style={{
                  backgroundColor: "#FFCC21",
                  position: "absolute",
                  bottom: "0",
                }}
              >
                {data.time}
              </Typography>
            </BoxStyled>
            <Typography variant="body1" ml={1}>
              {data.title}
            </Typography>
            <Typography color="#FF963C" variant="body2" ml={1}>
              {data.titleInfo}
            </Typography>
          </MenuStyled>
        );
      })}
    </>
  );
};

export default MenuRecommend;
