import { Grid, Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Dashboard from "./views/Dashboard";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "@mui/material";
import themes from "./themes/index";
import Diary from "./components/Diary/Diary";
import Infomation from "./views/Infomation";
import RecommendPage from "./views/RecommendPage";

function App() {
  return (
    <ThemeProvider theme={themes()}>
      <NavBar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        height="100%"
      >
        <Grid></Grid>
        <Grid>
          {/* <Dashboard /> */}
          {/* <Infomation /> */}
          <RecommendPage />
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
    </ThemeProvider>
  );
}

export default App;
