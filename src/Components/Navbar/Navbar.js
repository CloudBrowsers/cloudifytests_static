import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.scss";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";
import logo_dark from "../../assets/logo-dark.svg";

const drawerWidth = 240;
const navItems = [
  {
    id: "home",
    Name: "Home",
  },
  {
    id: "about",
    Name: "About",
  },
  {
    id: "offerings",
    Name: "Offerings",
  },
  {
    id: "features",
    Name: "Benefits",
  },
  {
    id: "usage",
    Name: "Usage",
  },
  {
    id: "contact",
    Name: "Contact Us",
  },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <Typography variant="h6" sx={{ my: 2 }}>
        CloudifyTests
      </Typography> */}
      <Box
        style={{
          display: "flex",
          justifyContant: "center",
          alignItems: "center",
          gap: "10px",
          padding: "1rem",
        }}
      >
        <img src={logo_dark} alt="logo_dark" style={{ width: "50px" }} />{" "}
        <span>CloudifyTests</span>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText
                // primary={<Link to={item.link}>{item.Name}</Link>}
                primary={
                  <Link
                    activeClass="active"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    duration={700}
                    offset={-70}
                  >
                    {item.Name}
                  </Link>
                }
                className="links"
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="appbar">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 0, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Box className="logo_container">
              <img src={logo} alt="logoc" /> <span>CloudifyTests</span>
            </Box>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button className="links">
                <Link
                  activeClass="active"
                  to={item.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  {item.Name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
