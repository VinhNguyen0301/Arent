import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Dashboard from "./views/Dashboard";
import MenuItem from "./components/Menu/MenuItem/MenuItem";
import Footer from "./components/footer/Footer";
import HexagonItem from "./components/Menu/MenuHexagon/HexagonItem";
import { ThemeProvider } from "@mui/material";
import themes from "./themes/index";
import Diary from "./components/Diary/Diary";
import Recommend from "./components/Recommend/Recommend";

function App() {
  return (
    <ThemeProvider theme={themes()}>
      <NavBar />
      <Dashboard />
      {/* <Recommend /> */}
      {/* <Add /> */}
      {/* <HexagonItem /> */}
      {/* <MenuItem />
      <Footer /> */}
    </ThemeProvider>
  );
}

export default App;
