import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import Dashboard from "./views/Dashboard";
import MenuItem from "./components/Menu/MenuItem/MenuItem";

function App() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Dashboard />
      {/* <Add /> */}
      <MenuItem />
    </Box>
  );
}

export default App;
