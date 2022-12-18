import { Grid, Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Dashboard from "./views/Dashboard";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "@mui/material";
import themes from "./themes/index";
import Diary from "./components/Diary/Diary";
import Recommend from "./components/Recommend/Recommend";

function App() {
  return (
    <ThemeProvider theme={themes()}>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Grid></Grid>
        <Grid>
          <Dashboard />
        </Grid>
        <Grid></Grid>
      </Stack>

      <Footer />
      {/* <Recommend /> */}
      {/* <Add /> */}
    </ThemeProvider>
  );
}

export default App;
