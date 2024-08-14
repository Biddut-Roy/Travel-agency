import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FlightSearch = () => {
  const [adult, setAdult] = React.useState("");
  const [child, setChild] = React.useState("");
  const [infant, setInfant] = React.useState("");
  const [classType, setClassType] = React.useState("");

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
        <FormControl variant="outlined">
          <InputLabel id="class-type-label">Class Type</InputLabel>
          <Select
            labelId="class-type-label"
            id="class-type-select"
            name="classType"
            value={classType}
            onChange={handleChange}
            label="Class Type"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"Economy"}>Economy</MenuItem>
            <MenuItem value={"Business"}>Business</MenuItem>
            <MenuItem value={"First"}>First</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" fullWidth>
          Search for Flight
        </Button>
      </form>
    </div>
  );
};

export default FlightSearch;
