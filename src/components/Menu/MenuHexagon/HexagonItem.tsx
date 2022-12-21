import { Box, Typography, styled } from "@mui/material";
import React from "react";
import HexagonIcon from "@mui/icons-material/Hexagon";
import { CupIcon, KnifeIcon } from "../../icon";

const HexagonStyled = styled(Box)(() => ({
  marginTop: "30px",
  width: "104px",
  height: "60px",
  backgroundColor: "#FFCC21",
  borderColor: "#27aae1",
  position: "relative",
  display: "inline-block",

  "&:before": {
    content: '""',
    width: "0",
    height: "0",
    borderBottom: "30px solid",
    borderColor: "#FFCC21",
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
    borderColor: "#FFCC21",
    borderLeft: "52px solid transparent",
    borderRight: "52px solid transparent",
  },
}));

const fakeData = [
  {
    // img: KnifeIcon,
    title: "Morning",
  },
  {
    // img: KnifeIcon,
    title: "Lunch",
  },
  {
    // img: KnifeIcon,
    title: "Dinner",
  },
  {
    // img: CupIcon,
    title: "Snack",
  },
];

const HexagonBoxStyled = styled("div")(({ theme }) => ({
  marginTop: "22px",

  [theme.breakpoints.down("sm")]: {
    marginLeft: "20px",
    marginBottom: "20px",
  },
}));

const HexagonItem = () => {
  return (
    <>
      {fakeData.map((data) => {
        return (
          <HexagonBoxStyled>
            <HexagonStyled>
              <Box ml="29px">
                {data.title === "Snack" ? <CupIcon /> : <KnifeIcon />}
              </Box>
            </HexagonStyled>
            <Typography
              sx={{
                position: "absolute",
                marginLeft: "25px",
                marginTop: "-10px",
                color: "white",
              }}
            >
              {data.title}
            </Typography>
          </HexagonBoxStyled>
        );
      })}
    </>
  );
};

export default HexagonItem;
