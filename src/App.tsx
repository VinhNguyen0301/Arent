import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Dashboard from "./views/Dashboard";
import MenuItem from "./components/Menu/MenuItem/MenuItem";
import Footer from "./components/footer/Footer";
import HexagonItem from "./components/Menu/MenuHexagon/HexagonItem";

function App() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Dashboard />
      {/* <Add /> */}
      <HexagonItem />
      {/* <MenuItem />
      <Footer /> */}
    </Box>
  );
}

export default App;
