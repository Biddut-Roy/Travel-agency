import {
  Grid,
  Box,
  Typography,
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
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

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
      sm={8}
      sx={{
        p: 4,
        gap: "1px",
        boxShadow: 3,
        display: { xs: "grid", sm: "flex", md: "flex", lg: "flex" },
      }}
    >
      <Grid
        xs={12}
        md={8}
        sx={{
          bgcolor: "#f5f5f5",
          borderRadius: 4,
          padding: "15px",
          paddingLeft: "15px",
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

        <Grid container spacing={1} marginTop={2}>
          {/* Flight Selection */}
          <Grid item xs={8} md={5} sx={{}}>
            <Typography variant="h6" align="center" color="textSecondary">
              From
            </Typography>
            <Typography variant="h4" align="center" color="#66BB6A">
              DAC
            </Typography>
            <Box sx={{ mt: 2, color: "black" }}>
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
            </Box>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              marginTop={3}
            >
              From
            </Typography>
            <Typography variant="h4" align="center" color="#66BB6A">
              JED
            </Typography>
            <Box sx={{ mt: 2, color: "black" }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ color: "#66BB6A", mr: 1 }} />
                <Typography variant="body2" sx={{ bgcolor: "#D7E7F4" }}>
                  Jeddah Intl (JED)
                </Typography>
              </CardContent>
            </Box>
          </Grid>

          {/* Flight LOGO */}
          <Grid
            item
            xs={8}
            md={2}
            sx={{
              display: { xs: "none", sm: "none", md: "grid" },
              justifyContent: "center",
              marginTop: "16px",
            }}
          >
            <FlightIcon
              sx={{
                fontSize: 100,
                color: "#66BB6A",
                transform: "rotate(90deg)",
              }}
            />
            <FlightIcon
              sx={{
                fontSize: 100,
                color: "#66BB6A",
                transform: "rotate(90deg)",
              }}
            />
          </Grid>

          <Grid item xs={12} md={5}>
            <Typography variant="h6" align="center" color="textSecondary">
              To
            </Typography>
            <Typography variant="h4" align="center" color="#66BB6A">
              JED
            </Typography>
            <Box sx={{ mt: 2, color: "black" }}>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <LocationOnIcon sx={{ color: "#66BB6A", mr: 1 }} />
                <Typography variant="body2" sx={{ bgcolor: "#D7E7F4" }}>
                  Jeddah Intl (JED)
                </Typography>
              </CardContent>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <EventIcon sx={{ color: "#66BB6A", mr: 1 }} />
                <Typography variant="body2" sx={{ bgcolor: "#D7E7F4" }}>
                  16 Aug 24
                </Typography>
              </CardContent>
            </Box>
            <Typography variant="h6" align="center" color="textSecondary">
              To
            </Typography>
            <Typography
              variant="h4"
              align="center"
              color="#66BB6A"
              sx={{ mt: 2 }}
            >
              MED
            </Typography>
            <Box sx={{ mt: 2, color: "black" }}>
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon sx={{ color: "#66BB6A", mr: 1 }} />
                <Typography variant="body2" sx={{ bgcolor: "#D7E7F4" }}>
                  Prince Mohammad Bin Abdulaziz Intl (MED)
                </Typography>
              </CardContent>
              <CardContent sx={{ display: "flex", alignItems: "center" }}>
                <EventIcon sx={{ color: "#66BB6A", mr: 1 }} />
                <Box sx={{ bgcolor: "#f5f5f5" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
                  </LocalizationProvider>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      {/* Passenger & Class Selection */}
      <Grid
        item
        xs={12}
        sm={4}
        md={4}
        sx={{
          bgcolor: "#f5f5f5",
          borderRadius: 4,
          padding: "15px",
          paddingLeft: "15px",
        }}
      >
        <FlightSearchSection />
      </Grid>
    </Box>
  );
};

export default FlightSearch;
