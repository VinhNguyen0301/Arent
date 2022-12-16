import { Box, Typography, styled } from "@mui/material";
import React from "react";
import HexagonIcon from "@mui/icons-material/Hexagon";
import { CupIcon, KnifeIcon } from "../../icon";

const HexagonStyled = styled(Box)(() => ({
  marginTop: "30px",
  width: "104px",
  height: "60px",
  backgroundColor: "#27aae1",
  borderColor: "#27aae1",
  position: "relative",
  display: "inline-block",

  "&:before": {
    content: '""',
    width: "0",
    height: "0",
    borderBottom: "30px solid",
    borderColor: "inherit",
    borderLeft: "52px solid transparent",
    borderRight: "52px solid transparent",
    position: "absolute",
    top: "-30px",
  },
  "&:after": {
    content: '""',
    width: "0",
    position: "absolute",
    bottom: "-30px",
    borderTop: "30px solid",
    borderColor: "inherit",
    borderLeft: "52px solid transparent",
    borderRight: "52px solid transparent",
  },
}));

const HexagonItem = () => {
  return (
    <Box ml="50%" mt="90px">
      <HexagonStyled>
        <Box ml="25px">
          <KnifeIcon />
          {/* <CupIcon /> */}
          <Typography>Morning</Typography>
        </Box>
      </HexagonStyled>
    </Box>
  );
};

export default HexagonItem;
