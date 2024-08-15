import { useState } from "react";
import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, Grid } from "@mui/material";

const FlightSearchSection = () => {
  const [cabinClass, setCabinClass] = useState("Economy");

  const handleCabinClassChange = (event) => {
    setCabinClass(event.target.value);
  };

  return (
    <Grid container sx={{ maxWidth: "100%", maxHeight: "100vh" }}>
      <Grid item xs={12}>
        <Box>
          <form noValidate autoComplete="off">
            <Grid item xs={8} md={8} sx={{}}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "5px",
                }}
              >
                <Select
                  defaultValue={1}
                  sx={{ minWidth: 120, height: 30 }}
                  variant="outlined"
                >
                  <MenuItem value={1}>1 ADULT</MenuItem>
                  <MenuItem value={2}>2 ADULTS</MenuItem>
                  <MenuItem value={3}>3 ADULTS</MenuItem>
                </Select>
                <Select
                  defaultValue={0}
                  sx={{ minWidth: 120, height: 30 }}
                  variant="outlined"
                >
                  <MenuItem value={0}>0 CHILD</MenuItem>
                  <MenuItem value={1}>1 CHILD</MenuItem>
                  <MenuItem value={2}>2 CHILDREN</MenuItem>
                </Select>
                <Select
                  defaultValue={0}
                  sx={{ minWidth: 120, height: 30 }}
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
              sx={{ py: { xs: "1rem", sm: "2rem", md: "3rem" } }}
            >
              <FormControl fullWidth>
                <Select
                  labelId="cabin-class-label"
                  id="cabin-class"
                  value={cabinClass}
                  onChange={handleCabinClassChange}
                >
                  <MenuItem value="Economy">Economy</MenuItem>
                  <MenuItem value="Business">Business</MenuItem>
                  <MenuItem value="First Class">First Class</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
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
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default FlightSearchSection;
