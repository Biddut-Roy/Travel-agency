import {
  Grid,
  Box,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import FlightIcon from "@mui/icons-material/Flight";
import EventIcon from "@mui/icons-material/Event";
import FlightSearchSection from "../component/FlightSearchSection";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import AirportSelector from "./Test";

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
          <Grid
            item
            xs={8}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              mt={2}
            >
              From
            </Typography>
            <Typography variant="h4" align="center" color="#66BB6A">
              DAC
            </Typography>
            <AirportSelector value={2} />
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              mt={5}
            >
              From
            </Typography>
            <Typography variant="h4" align="center" color="#66BB6A">
              JED
            </Typography>
            <AirportSelector value={1} />
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

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              mt={2}
            >
              To
            </Typography>
            <Typography variant="h4" align="center" color="#66BB6A">
              JED
            </Typography>
            <Box sx={{ color: "black" }}>
              <AirportSelector value={0} />
              <Box sx={{ display: "flex", alignItems: "center", mt: "2px" }}>
                <EventIcon sx={{ color: "#66BB6A", mr: 1 }} />
                <Box
                  sx={{
                    width: "71%",
                    bgcolor: "#D7E7F4",
                    height: "30px",
                    "& .MuiOutlinedInput-root": {
                      height: "30px",
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
                  </LocalizationProvider>
                </Box>
              </Box>
            </Box>

            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              mt={2}
            >
              To
            </Typography>
            <Typography variant="h4" align="center" color="#66BB6A">
              MED
            </Typography>
            <Box sx={{ color: "black" }}>
              <AirportSelector value={3} />
              <Box sx={{ display: "flex", alignItems: "center", mt: "2px" }}>
                <EventIcon sx={{ color: "#66BB6A", mr: 1 }} />
                <Box
                  sx={{
                    width: "71%",
                    bgcolor: "#D7E7F4",
                    height: "30px",
                    "& .MuiOutlinedInput-root": {
                      height: "30px",
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
                  </LocalizationProvider>
                </Box>
              </Box>
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
