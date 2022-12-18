import { Grid, Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Dashboard from "./views/Dashboard";
import MenuItem from "./components/Menu/MenuItem/MenuItem";
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

      {/* <Recommend /> */}
      {/* <Add /> */}
      {/* <MenuItem />
      <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
