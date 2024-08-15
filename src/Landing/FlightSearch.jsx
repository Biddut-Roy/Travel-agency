import {
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  FormControlLabel,
  RadioGroup,
  Radio,
  Autocomplete,
  TextField,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlightIcon from "@mui/icons-material/Flight";
import EventIcon from "@mui/icons-material/Event";
import FlightSearchSection from "../component/FlightSearchSection";

const airports = [
  { name: "Hazrat Shahjalal Intl Airport", code: "DAC" },
  { name: "Dubai Intl Airport", code: "DXB" },
  { name: "Cox's Bazar Airport", code: "CXB" },
  { name: "Jashore Airport", code: "JSR" },
  { name: "Barishal Airport", code: "BZL" },
  { name: "Shah Makhdum Airport", code: "RJH" },
  { name: "Saidpur Airport", code: "SPD" },
];

const FlightSearch = () => {
  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "#f5f5f5",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Grid item xs={12}>
        <RadioGroup
          row
          aria-label="trip-type"
          name="trip-type"
          defaultValue="multi-city"
        >
          <FormControlLabel
            value="round-way"
            control={<Radio />}
            label="Round-way"
            sx={{ color: "#66BB6A" }}
          />
          <FormControlLabel
            value="one-way"
            control={<Radio />}
            label="One-way"
            sx={{ color: "#66BB6A" }}
          />
          <FormControlLabel
            value="multi-city"
            control={<Radio />}
            label="Multi-city"
            sx={{ color: "#66BB6A" }}
          />
        </RadioGroup>
      </Grid>

      <Grid container spacing={3}>
        {/* Flight Selection */}
        <Grid item xs={12} md={3} sx={{ margin: "auto" }}>
          <Typography variant="h6" align="center" color="textSecondary">
            From
          </Typography>
          <Typography variant="h3" align="center" color="#66BB6A">
            DAC
          </Typography>
          <Card sx={{ mt: 2 }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ color: "#66BB6A", mr: 1 }} />
              <Autocomplete
                options={airports}
                getOptionLabel={(option) => `${option.name} (${option.code})`}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search a airport..."
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </CardContent>
          </Card>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            marginTop={3}
          >
            From
          </Typography>
          <Typography variant="h3" align="center" color="#66BB6A">
            JED
          </Typography>
          <Card sx={{ mt: 2 }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ color: "#66BB6A", mr: 1 }} />
              <Typography variant="body2">Jeddah Intl (JED)</Typography>
            </CardContent>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <EventIcon sx={{ color: "#66BB6A", mr: 1 }} />
              <Typography variant="body2">16 Aug 24</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          md={2}
          sx={{ display: "grid", justifyContent: "center", marginTop: "16px" }}
        >
          <FlightIcon
            sx={{ fontSize: 100, color: "#66BB6A", transform: "rotate(90deg)" }}
          />
          <FlightIcon
            sx={{ fontSize: 100, color: "#66BB6A", transform: "rotate(90deg)" }}
          />
        </Grid>

        <Grid item xs={12} md={3} sx={{ margin: "auto" }}>
          <Typography variant="h6" align="center" color="textSecondary">
            To
          </Typography>
          <Typography variant="h3" align="center" color="#66BB6A">
            JED
          </Typography>
          <Card sx={{ mt: 2 }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ color: "#66BB6A", mr: 1 }} />
              <Typography variant="body2">Jeddah Intl (JED)</Typography>
            </CardContent>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <EventIcon sx={{ color: "#66BB6A", mr: 1 }} />
              <Typography variant="body2">16 Aug 24</Typography>
            </CardContent>
          </Card>
          <Typography variant="h6" align="center" color="textSecondary">
            To
          </Typography>
          <Typography
            variant="h3"
            align="center"
            color="#66BB6A"
            sx={{ mt: 2 }}
          >
            MED
          </Typography>
          <Card sx={{ mt: 2 }}>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <LocationOnIcon sx={{ color: "#66BB6A", mr: 1 }} />
              <Typography variant="body2">
                Prince Mohammad Bin Abdulaziz Intl (MED)
              </Typography>
            </CardContent>
            <CardContent sx={{ display: "flex", alignItems: "center" }}>
              <EventIcon sx={{ color: "#66BB6A", mr: 1 }} />
              <Typography variant="body2">18 Aug 24</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Passenger & Class Selection */}
        <Grid item xs={12} md={4} sx={{}}>
          <FlightSearchSection />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlightSearch;
