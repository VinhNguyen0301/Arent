import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(lng);
  }, []);

  const lng = navigator.language;
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <div>1</div>
        <div>{lng}</div>
        <div>{t("greeting.hello")}</div>
      </Stack>
      {/* <Add /> */}
    </Box>
  );
}

export default App;
