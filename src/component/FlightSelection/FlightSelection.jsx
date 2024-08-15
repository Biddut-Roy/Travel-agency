import { Grid, Box, Typography } from "@mui/material";

import FlightIcon from "@mui/icons-material/Flight";
import FlightCard from "./FlightCard";
import AirportDropdown from "./AirportDropdown";

const FlightSelection = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <Typography variant="h6" align="center" color="textSecondary">
          From
        </Typography>
        <Typography variant="h3" align="center" color="#66BB6A">
          DAC
        </Typography>
        <Box sx={{ mt: 2 }}>
          <AirportDropdown />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <FlightIcon
          sx={{ fontSize: 64, color: "#66BB6A", transform: "rotate(90deg)" }}
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <Typography variant="h6" align="center" color="textSecondary">
          To
        </Typography>
        <Typography variant="h3" align="center" color="#66BB6A">
          JED
        </Typography>
        <FlightCard
          airportCode="JED"
          airportName="Jeddah Intl"
          date="16 Aug 24"
        />
        <Typography variant="h3" align="center" color="#66BB6A">
          MED
        </Typography>
        <FlightCard
          airportCode="MED"
          airportName="Prince Mohammad Bin Abdulaziz Intl"
          date="18 Aug 24"
        />
      </Grid>
    </Grid>
  );
};

export default FlightSelection;
