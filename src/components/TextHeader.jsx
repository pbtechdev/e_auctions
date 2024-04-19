import { Typography } from "@mui/material";
import React from "react";

const TextHeader = ({ children }) => {
  return (
    <Typography
      sx={{
        fontSize: "2rem",
        fontWeight: 700,
        lineHeight: "60.77px",
        textAlign: "center",
        color: "primary.main",
      }}
    >
      {children}
    </Typography>
  );
};

export default TextHeader;
