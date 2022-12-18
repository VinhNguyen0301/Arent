import {
  AppBar,
  Box,
  InputBase,
  styled,
  Typography,
  MenuItem,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { ChallengeIcon, InfoIcon, LogoIcon, ProfileIcon } from "../icon";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";

import React, { useState } from "react";

const Footer = () => {
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
            <Typography variant="subtitle1" ml={1}>
              {t("myProfile")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "16px",
            }}
          >
            <Typography variant="subtitle1" ml={1}>
              {t("challenge")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "16px",
            }}
          >
            <Typography variant="subtitle1" ml={1}>
              {t("info")}
            </Typography>
          </Box>
          <Typography variant="subtitle1" ml={5}>
            {t("myProfile")}
          </Typography>
          <Typography variant="subtitle1" ml={5}>
            {t("myProfile")}
          </Typography>
          <Typography variant="subtitle1" ml={5}>
            {t("myProfile")}
          </Typography>
        </Box>
      </StyledToolBar>
    </AppBar>
  );
};

export default Footer;
