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
        <Box>
          <LogoIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ProfileIcon />
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              <Typography variant="subtitle1" ml={1}>
                {t("myProfile")}
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "16px",
            }}
          >
            <ChallengeIcon />
            <Link
              to="/information"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Typography variant="subtitle1" ml={1}>
                {t("challenge")}
              </Typography>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "16px",
            }}
          >
            <InfoIcon />
            <Link
              to="/recommend"
              style={{ color: "white", textDecoration: "none" }}
            >
              <Typography variant="subtitle1" ml={1}>
                {t("info")}
              </Typography>
            </Link>
          </Box>
        </Box>
        <Box marginLeft="16px">
          <MenuIcon />
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
