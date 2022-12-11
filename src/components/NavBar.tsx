import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Menu,
  styled,
  Typography,
  MenuItem,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import CodeIcon from "@mui/icons-material/Code";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Avatar from "@mui/material/Avatar";
// import superman from "../superman.png";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import React, { useState } from "react";
import { ChallengeIcon, InfoIcon, LogoIcon, ProfileIcon } from "./icon";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";

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
        <Box marginLeft="160px">
          <LogoIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            marginLeft: "288px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <ProfileIcon />
            <Typography>{t("myProfile")}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "16px",
            }}
          >
            <ChallengeIcon />
            <Typography>{t("challenge")}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "16px",
            }}
          >
            <InfoIcon />
            <Typography>{t("info")}</Typography>
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
