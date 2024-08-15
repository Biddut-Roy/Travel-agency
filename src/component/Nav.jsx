import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";

const pages = ["Page 1", "Page 2", "Page 3"]; // Example pages

function Nav() {
  const handleCloseNavMenu = () => {
    // Your logic for closing the navigation menu
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "30rem",
        bgcolor: "white",
        color: "black",
        borderRadius: "16px",
        height: "42px",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  color: "black",
                  height: "16px",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
