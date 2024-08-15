import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import TourIcon from "@mui/icons-material/Tour";
import VisaIcon from "@mui/icons-material/AssignmentInd";
import { useState } from "react";

const pages = [
  { name: "FLIGHT", icon: <FlightIcon /> },
  { name: "HOTEL", icon: <HotelIcon /> },
  { name: "TOUR", icon: <TourIcon /> },
  { name: "VISA", icon: <VisaIcon /> },
];

function Nav() {
  const [activePage, setActivePage] = useState("FLIGHT");

  return (
    <AppBar
      position="static"
      sx={{
        width: "30rem",
        bgcolor: "white",
        color: "black",
        borderRadius: "16px",
        height: "42px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifySpace: "between",
              alignItems: "center",
              flexGrow: 1,
              gap: 2,
            }}
          >
            {pages.map((page) => (
              <Button
                variant="contained"
                key={page.name}
                startIcon={page.icon}
                sx={{
                  bgcolor: activePage === page.name ? "#66BB6A" : "white",
                  height: "20px",
                  "&:hover": {
                    bgcolor: "#66BB6A",
                  },
                  color: activePage === page.name ? "white" : "#66BB6A",
                }}
                onClick={() => setActivePage(page.name)}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
