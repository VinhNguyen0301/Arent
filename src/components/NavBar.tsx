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

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#414141",
  });

  const Icons = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    // backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <LogoIcon />

        <ProfileIcon />
        <ChallengeIcon />
        <InfoIcon />
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: "30px", height: "30px" }} />
          <Typography>Mar Sino</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
