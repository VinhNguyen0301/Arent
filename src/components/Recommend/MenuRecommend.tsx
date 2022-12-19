import React from "react";
import { Box, Typography } from "@mui/material";
import col1 from "../../assets/Photo/photo/column-1.jpg";

const MenuRecommend = () => {
  return (
    <Box width="234px" height="144.47px" ml="8px">
      <Box
        width="234px"
        height="144.47px"
        ml="8px"
        sx={{ position: "relative" }}
      >
        <img
          src={col1}
          style={{
            maxHeight: "100%",
            position: "relative",
          }}
        ></img>

        <Typography
          style={{
            backgroundColor: "yellow",
            position: "absolute",
            bottom: "0",
          }}
        >
          05.21.Morning
        </Typography>
      </Box>
      <Typography variant="body1">
        魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…
      </Typography>
      <Typography color="#FF963C" variant="body2">
        #魚料理 #和食 #DHA
      </Typography>
    </Box>
  );
};

export default MenuRecommend;
