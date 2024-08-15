import { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  InputAdornment,
  Box,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FlightSearch from "../component/Flightsearch";
import Nav from "../component/Nav";

const FlightBooking = () => {
  const [tripType, setTripType] = useState("round-way");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleFromCityChange = (event) => {
    setFromCity(event.target.value);
  };

  const handleToCityChange = (event) => {
    setToCity(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    setDepartureDate(event.target.value);
  };

  const handleReturnDateChange = (event) => {
    setReturnDate(event.target.value);
  };

  const handleAdultCountChange = (event) => {
    setAdultCount(event.target.value);
  };

  const handleChildCountChange = (event) => {
    setChildCount(event.target.value);
  };

  const handleInfantCountChange = (event) => {
    setInfantCount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // Handle form submission logic here
  };

  return (
    <Box sx={{ bgcolor: "white", color: "black", p: 2 }}>
      <Nav />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <RadioGroup
                    row
                    aria-label="trip-type"
                    name="trip-type"
                    value={tripType}
                    onChange={handleTripTypeChange}
                  >
                    <FormControlLabel
                      value="round-way"
                      control={<Radio />}
                      label="Round-way"
                    />
                    <FormControlLabel
                      value="one-way"
                      control={<Radio />}
                      label="One-way"
                    />
                    <FormControlLabel
                      value="multi-city"
                      control={<Radio />}
                      label="Multi-city"
                    />
                  </RadioGroup>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="From"
                    variant="outlined"
                    fullWidth
                    value={fromCity}
                    onChange={handleFromCityChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="To"
                    variant="outlined"
                    fullWidth
                    value={toCity}
                    onChange={handleToCityChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Departure Date"
                    variant="outlined"
                    fullWidth
                    type="date"
                    value={departureDate}
                    onChange={handleDepartureDateChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarMonthIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                {tripType === "round-way" && (
                  <Grid item xs={12} md={6}>
                    <TextField
                      label="Return Date"
                      variant="outlined"
                      fullWidth
                      type="date"
                      value={returnDate}
                      onChange={handleReturnDateChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarMonthIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="adult-count-label">Adults</InputLabel>
                    <Select
                      labelId="adult-count-label"
                      id="adult-count"
                      value={adultCount}
                      onChange={handleAdultCountChange}
                    >
                      {[...Array(10).keys()].map((i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="child-count-label">Children</InputLabel>
                    <Select
                      labelId="child-count-label"
                      id="child-count"
                      value={childCount}
                      onChange={handleChildCountChange}
                    >
                      {[...Array(10).keys()].map((i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="infant-count-label">Infants</InputLabel>
                    <Select
                      labelId="infant-count-label"
                      id="infant-count"
                      value={infantCount}
                      onChange={handleInfantCountChange}
                    >
                      {[...Array(10).keys()].map((i) => (
                        <MenuItem key={i + 1} value={i + 1}>
                          {i + 1}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Search for Flights
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={6}>
            <FlightSearch />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FlightBooking;
