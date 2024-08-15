import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const Nav = () => {
  const pages = ["Products", "Pricing", "Blog"];

  const handleCloseNavMenu = () => {
    console.log("handleCloseNavMenu Working");
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: "50rem",
        bgcolor: "white",
        color: "black",
        borderRadius: "16px",
        height: "42px",
        margin: "auto",
      }}
    >
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ color: "black" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
