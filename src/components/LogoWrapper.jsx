import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const LogoWrapper = ({ goto, src, alt, ...rest }) => {
  return (
    <Link to={goto}>
      <Box {...rest}>
        <Box
          component="img"
          src={src}
          alt={alt ?? "LOGO"}
          width="100%"
          height="100%"
        />
      </Box>
    </Link>
  );
};

export default LogoWrapper;
