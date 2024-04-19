import React from "react";
import { Box } from "@mui/material";

const Image = ({ sx, src, alt }) => {
  return (
    <Box sx={sx}>
      <img src={src} alt={alt ?? "icon"} height="100%" width="100%" />
    </Box>
  );
};

export default Image;
