import { Box, Grid } from "@mui/material";
import "./App.css";
import NavBar from "./component/NavBar";
import FlightSearch from "./Landing/FlightSearch";
import backgroundImage from "/pngtree.png"; // Ensure this path is correct
import Nav from "./component/Nav";
function App() {
  return (
    <>
      <NavBar />
      <Grid component="div" container sx={{ bgcolor: "#EDF2F6" }}>
        <Grid component="div">
          <Box
            sx={{
              padding: { xs: "5px", sm: "20px", md: "30px", lg: "50px" },
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              borderRadius: "8px",
              display: "flex",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                width: "93vw",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box paddingTop={5} paddingBottom={2}>
                <Nav />
              </Box>
              <Box
                sx={{
                  padding: "50px",
                  paddingTop: "0px",
                  borderRadius: "8px",
                }}
              >
                <FlightSearch />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
