import {
  AppBar,
  Box,
  InputBase,
  styled,
  Typography,
  MenuItem,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React, { useState } from "react";
import { ChallengeIcon, InfoIcon, LogoIcon, ProfileIcon } from "./icon";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";

const LogoStyled = styled("div")(({ theme }) => ({
  marginLeft: "160px",

  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
  },
}));

const MenuStyled = styled("div")(({ theme }) => ({
  marginLeft: "315px",
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
  },
}));

const MenuSelectStyled = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MenuExpanseStyled = styled("div")(({ theme }) => ({
  marginRight: "130px",
  color: "#FF963C",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
    marginRight: "0px",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#414141",
  });

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <LogoStyled>
          <LogoIcon />
        </LogoStyled>

        <MenuStyled>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <ProfileIcon />
              <MenuSelectStyled>
                <Typography variant="subtitle1" ml={1} pr={2}>
                  {t("myProfile")}
                </Typography>
              </MenuSelectStyled>
            </Box>
          </Link>

          <Link
            to="/information"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "16px",
              }}
            >
              <ChallengeIcon />
              <MenuSelectStyled>
                <Typography variant="subtitle1" ml={1} pr={2}>
                  {t("challenge")}
                </Typography>
              </MenuSelectStyled>
            </Box>
          </Link>

          <Link
            to="/recommend"
            style={{ color: "white", textDecoration: "none" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "16px",
              }}
            >
              <InfoIcon />
              <MenuSelectStyled>
                <Typography variant="subtitle1" ml={1} pr={2}>
                  {t("info")}
                </Typography>
              </MenuSelectStyled>
            </Box>
          </Link>
        </MenuStyled>
        <MenuExpanseStyled>
          <MenuIcon />
        </MenuExpanseStyled>
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
