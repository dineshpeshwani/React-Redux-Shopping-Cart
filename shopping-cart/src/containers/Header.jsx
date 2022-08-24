import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" margin>
        <Toolbar>
            <Sidebar></Sidebar>
            
          <Link to={"/"} className="linkTag">
            <Typography
              variant="h4"
              color="white"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Shopping App
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
