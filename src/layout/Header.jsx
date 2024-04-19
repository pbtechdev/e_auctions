import React, { useState } from "react";
import eActionLogo from "../assets/logos/eAuctionLogo.svg";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import LogoWrapper from "../components/LogoWrapper";
import NavBar from "./NavBar";
import MenuPopover from "./MenuPopover";
import { useResponsive } from "../hooks/useResponsive";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [auth] = useState(true);
  const navigate = useNavigate();
  const isMobile = useResponsive("down", "md");

  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            backgroundColor: "common.white",
            px: { sm: 1, md: "80px" },
          }}
        >
          <LogoWrapper src={eActionLogo} goto="/" />
          <Box flex={1} />
          {isMobile ? null : <NavBar />}
          {auth && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                paddingLeft: { sm: 1, md: 6 },
                paddingRight: { sm: 1, md: 3 },
              }}
            >
              <Button onClick={() => navigate("/sign-up")} sx={{ py: "3px" }}>
                Sign Up
              </Button>
              <Button onClick={() => navigate("/log-in")} sx={{ py: "3px" }}>
                Login
              </Button>
            </Box>
          )}
          <MenuPopover />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
