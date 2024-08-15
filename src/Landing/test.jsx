import { Box, Autocomplete, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const airports = [
  { name: "Hazrat Shahjalal Intl Airport", code: "DAC" },
  { name: "Dubai Intl Airport", code: "DXB" },
  { name: "Cox's Bazar Airport", code: "CXB" },
  { name: "Jashore Airport", code: "JSR" },
  { name: "Barishal Airport", code: "BZL" },
  { name: "Shah Makhdum Airport", code: "RJH" },
  { name: "Saidpur Airport", code: "SPD" },
];

// eslint-disable-next-line react/prop-types
const AirportSelector = ({ value = 0 }) => {
  return (
    <Box
      mt={2}
      sx={{
        display: "flex",
        alignItems: "center",
        width: "80%",
      }}
    >
      <LocationOnIcon sx={{ color: "#66BB6A", mr: 1 }} />
      <Autocomplete
        options={airports}
        defaultValue={airports[value]}
        getOptionLabel={(option) => `${option.name} (${option.code})`}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search a airport..."
            variant="outlined"
            fullWidth
            sx={{
              bgcolor: "#D7E7F4",
              height: "30px",
              "& .MuiOutlinedInput-root": {
                height: "30px",
                "& fieldset": {
                  border: "none",
                },
              },
            }}
          />
        )}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              bgcolor: "#66BB6A",
              color: "#fff",
              padding: "10px",
              borderRadius: 2,
              gap: "6px",
            }}
            {...props}
          >
            <Typography>{option.name}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>{option.code}</Typography>
          </Box>
        )}
        sx={{ width: "100%" }}
      />
    </Box>
  );
};

export default AirportSelector;
