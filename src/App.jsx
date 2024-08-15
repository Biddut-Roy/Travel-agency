import { Box, Grid } from "@mui/material";
import "./App.css";
import NavBar from "./component/NavBar";
import FlightSearch from "./Landing/FlightSearch";
import backgroundImage from "/pngtree.png";
import Nav from "./component/Nav";

function App() {
  return (
    <>
      <NavBar />
      <Grid component="div" container sx={{ bgcolor: "#EDF2F6" }}>
        <Grid component="div">
          <Box
            sx={{
              padding: { xs: "0px", sm: "0px", md: "30px", lg: "50px" },
              backgroundColor: "#EDF2F6",
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
                width: { xs: "100vw", sm: "100vw", md: "92vw", lg: "92vw" },
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Box paddingTop={5}>
                <Nav />
              </Box>
              <Box
                sx={{
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
