import {
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
const NavBar = () => {
  return (
    <Grid sx={{ bgcolor: "#EDF2F6" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://cdn.flyfarint.com/WL/B2C/FFA2654/companylogo.webp?t=1723717693204"
              alt="Logo"
              height={80}
            />
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://cdn.flyfarint.com/WL/B2C/FFA2654/companylogo.webp?t=1723717693204"
              alt="Logo"
              height={80}
            />
          </Typography>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Login or Sign Up">
              <Button
                variant="contained"
                size="small"
                sx={{
                  bgcolor: "gray",
                  "&:hover": {
                    bgcolor: "gray",
                  },
                }}
              >
                Login/Sign Up
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </Grid>
  );
};

export default NavBar;
