import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";

const FlightSearch = () => {
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  const [infant, setInfant] = useState("");
  const [setClassType] = useState("");
  const [cabinClass, setCabinClass] = useState("Economy");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "adult") {
      setAdult(value);
    } else if (name === "child") {
      setChild(value);
    } else if (name === "infant") {
      setInfant(value);
    } else if (name === "classType") {
      setClassType(value);
    }
  };
  const handleCabinClassChange = (event) => {
    setCabinClass(event.target.value);
  };

  return (
    // eslint-disable-next-line react/no-unknown-property
    <div sx={{ "& .MuiTextField-root": { m: 3, width: "25ch" } }}>
      <form noValidate autoComplete="off">
        <div>
          <TextField
            id="outlined-number"
            label="Adult"
            type="number"
            name="adult"
            InputLabelProps={{ shrink: true }}
            value={adult}
            onChange={handleChange}
          />
          <TextField
            id="outlined-number"
            label="Child"
            type="number"
            name="child"
            InputLabelProps={{ shrink: true }}
            value={child}
            onChange={handleChange}
          />
          <TextField
            id="outlined-number"
            label="Infant"
            type="number"
            name="infant"
            InputLabelProps={{ shrink: true }}
            value={infant}
            onChange={handleChange}
          />
        </div>
        <Grid item xs={12} sx={{ pb: { xs: "1rem", sm: "2rem", md: "3rem" } }}>
          <FormControl fullWidth>
            <InputLabel id="cabin-class-label">Cabin Class</InputLabel>
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
        <Button variant="contained" color="primary" fullWidth>
          Search for Flight
        </Button>
      </form>
    </div>
  );
};

export default FlightSearch;
