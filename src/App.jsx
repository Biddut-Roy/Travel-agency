import { Box } from "@mui/material";
import "./App.css";
import NavBar from "./component/NavBar";
import FlightSearch from "./Landing/FlightSearch";

function App() {
  return (
    <Box>
      <NavBar />
      <FlightSearch />
    </Box>
  );
}

export default App;
