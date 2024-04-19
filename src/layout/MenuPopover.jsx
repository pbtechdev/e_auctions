import { IconButton, Popover } from "@mui/material";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useResponsive } from "../hooks/useResponsive";

const MenuPopover = () => {
  const isDesktop = useResponsive("up", "lg");
  const { pathname } = useLocation();
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (open || isDesktop) return setOpen(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, isDesktop]);

  return (
    <>
      <IconButton
        onClick={(event) => setOpen(event.currentTarget)}
        sx={{ display: { sm: "block", md: "none" } }}
      >
        <MenuIcon size="large" />
      </IconButton>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={() => setOpen(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: {
              p: 0,
              mt: 1.5,
              ml: 0.75,
              width: 200,
              "& .MuiMenuItem-root": {
                typography: "body2",
                borderRadius: 0.75,
              },
            },
          },
        }}
      >
        <NavBar renderedBy="popup" />
      </Popover>
    </>
  );
};

export default MenuPopover;
