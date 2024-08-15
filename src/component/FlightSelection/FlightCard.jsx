import { Card, CardContent, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import EventIcon from "@mui/icons-material/Event";

const FlightCard = ({ airportCode, airportName, date }) => {
  return (
    <Card sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <LocationOnIcon sx={{ color: "#66BB6A", mr: 1 }} />
        <Typography variant="body1">
          {airportName} ({airportCode})
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", alignItems: "center" }}>
        <EventIcon sx={{ color: "#66BB6A", mr: 1 }} />
        <Typography variant="body1">{date}</Typography>
      </CardContent>
    </Card>
  );
};

export default FlightCard;
