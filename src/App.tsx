import { Grid, Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Dashboard from "./views/Dashboard";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "@mui/material";
import themes from "./themes/index";
import Infomation from "./views/Infomation";
import RecommendPage from "./views/RecommendPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={themes()}>
      <Box color={"text.primary"}>
        <NavBar />

        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          height="100%"
        >
          <Grid></Grid>
          <Grid xs={12} width="100%">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/information" element={<Infomation />} />
              <Route path="/recommend" element={<RecommendPage />} />
              {/* <Route path="/detail/:login" element={<CardInfor />} /> */}
            </Routes>
          </Grid>
          <Grid></Grid>
        </Stack>
        <div
          style={{
            minWidth: "100%",
            position: "fixed",
            bottom: "0",
            zIndex: "1",
          }}
        >
          <Footer />
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
