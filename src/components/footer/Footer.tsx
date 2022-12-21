import {
  AppBar,
  Box,
  InputBase,
  styled,
  Typography,
  MenuItem,
} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useTranslation } from "react-i18next";

import React, { useState } from "react";

const MenuSelectStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "160px",

  [theme.breakpoints.down("sm")]: {
    marginLeft: "10px",
    display: "none",
  },
}));

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
        <MenuSelectStyled
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Typography variant="subtitle1" mt={1.5}>
            会員登録
          </Typography>

          <Typography variant="subtitle1" ml={5.6} mt={1.5}>
            運営会社
          </Typography>

          <Typography variant="subtitle1" ml={5.6} mt={1.5}>
            利用規約
          </Typography>
          <Typography variant="subtitle1" ml={5.6} mt={1.5}>
            個人情報の取扱について
          </Typography>
          <Typography variant="subtitle1" ml={5.6} mt={1.5}>
            特定商取引法に基づく表記
          </Typography>
          <Typography variant="subtitle1" ml={5.6} mt={1.5}>
            お問い合わせ
          </Typography>
        </MenuSelectStyled>
      </StyledToolBar>
    </AppBar>
  );
};

export default Footer;
