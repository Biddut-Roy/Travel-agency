import { useState } from "react";
import {
  Button,
  MenuItem,
  FormControl,
  Select,
  Box,
  Grid,
} from "@mui/material";

const FlightSearchSection = () => {
  const [cabinClass, setCabinClass] = useState("Economy");

  const handleCabinClassChange = (event) => {
    setCabinClass(event.target.value);
  };

  return (
    <Grid
      container
      sx={{
        maxWidth: "100%",
        minHeight: "100vh",
        position: "relative", // Position relative for the container
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between", // Space between items to push content up
      }}
    >
      <Grid item xs={12}>
        <Box>
          <form noValidate autoComplete="off">
            <Grid item xs={8} md={8}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: { xs: "1px", sm: "2px", md: "12px", lg: "12px" },
                }}
              >
                <Select
                  defaultValue={1}
                  sx={{
                    minWidth: { xs: 50, sm: 68, md: 120, lg: 120 },
                    height: 30,
                    bgcolor: "#D7E7F4",
                  }}
                  variant="outlined"
                >
                  <MenuItem value={1}>1 ADULT</MenuItem>
                  <MenuItem value={2}>2 ADULTS</MenuItem>
                  <MenuItem value={3}>3 ADULTS</MenuItem>
                </Select>
                <Select
                  defaultValue={0}
                  sx={{
                    minWidth: { xs: 50, sm: 68, md: 120, lg: 120 },
                    height: 30,
                    bgcolor: "#D7E7F4",
                  }}
                  variant="outlined"
                >
                  <MenuItem value={0}>0 CHILD</MenuItem>
                  <MenuItem value={1}>1 CHILD</MenuItem>
                  <MenuItem value={2}>2 CHILDREN</MenuItem>
                </Select>
                <Select
                  defaultValue={0}
                  sx={{
                    minWidth: { xs: 50, sm: 68, md: 120, lg: 120 },
                    height: 30,
                    bgcolor: "#D7E7F4",
                  }}
                  variant="outlined"
                >
                  <MenuItem value={0}>0 INFANT</MenuItem>
                  <MenuItem value={1}>1 INFANT</MenuItem>
                  <MenuItem value={2}>2 INFANTS</MenuItem>
                </Select>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                py: { xs: "1rem", sm: "2rem", md: "3rem" },
              }}
            >
              <FormControl fullWidth>
                <Select
                  labelId="cabin-class-label"
                  id="cabin-class"
                  value={cabinClass}
                  onChange={handleCabinClassChange}
                  sx={{ bgcolor: "#D7E7F4" }}
                >
                  <MenuItem value="Economy">Economy</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="First Class">First Class</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </form>
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          position: "absolute", // Position buttons absolutely within the container
          bottom: 0,
          left: 0,
          right: 0,
          padding: "16px", // Add some padding for spacing
        }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#66BB6A",
            "&:hover": {
              bgcolor: "#66BB6A",
            },
          }}
        >
          Search for Flight
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: "12px",
            bgcolor: "#66BB6A",
            "&:hover": {
              bgcolor: "#66BB6A",
            },
          }}
        >
          Add City
        </Button>
      </Grid>
    </Grid>
  );
};

export default FlightSearchSection;
