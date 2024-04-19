import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Box, Link, MenuItem } from "@mui/material";

const navList = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Property Search", to: "/propery-search" },
  { label: "Categories", to: "/categories" },
  { label: "Process", to: "/process" },
  { label: "Blogs", to: "/blogs" },
  { label: "Contact Us", to: "/contact-us" },
];

const NavBar = ({ renderedBy }) => {
  const navigate = useNavigate();

  if (renderedBy === "popup") {
    return (
      <Box sx={{ p: 2 }}>
        {navList.map((item, i) => {
          return (
            <MenuItem
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "primary.light",
                  borderRadius: "40px",
                  color: "common.white",
                },
              }}
              key={i}
              onClick={() => navigate(item.to)}
            >
              {item.label}
            </MenuItem>
          );
        })}
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      {navList.map((item, i) => {
        return (
          <Link
            key={i}
            sx={{
              color: "primary.main",
              textDecoration: "none",
              fontWeight: 600,
              lineHeight: "27px",
            }}
            component={RouterLink}
            to={item.to}
          >
            {item.label}
          </Link>
        );
      })}
    </Box>
  );
};

export default NavBar;
