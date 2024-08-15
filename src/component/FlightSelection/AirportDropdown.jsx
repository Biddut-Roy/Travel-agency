import {
  Autocomplete,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

const airports = [
  { name: "Hazrat Shahjalal Intl Airport", code: "DAC" },
  { name: "Dubai Intl Airport", code: "DXB" },
  { name: "Cox's Bazar Airport", code: "CXB" },
  { name: "Jashore Airport", code: "JSR" },
  { name: "Barishal Airport", code: "BZL" },
  { name: "Shah Makhdum Airport", code: "RJH" },
  { name: "Saidpur Airport", code: "SPD" },
];

const AirportDropdown = () => {
  return (
    <Autocomplete
      options={airports}
      getOptionLabel={(option) => `${option.name} (${option.code})`}
      renderOption={(props, option) => (
        <li
          {...props}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ListItemText primary={option.name} />
          <Typography variant="body2" color="textSecondary">
            {option.code}
          </Typography>
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Search a airport..." variant="outlined" />
      )}
    />
  );
};

export default AirportDropdown;
