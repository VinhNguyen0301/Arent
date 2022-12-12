import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <NavBar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Stack>
      {/* <Add /> */}
    </Box>
  );
}

export default App;
