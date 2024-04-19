import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const ChipButton = ({ label, selected }) => {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <Box
        sx={{
          px: 2.5,
          py: 0.3,
          border: "2px solid",
          borderRadius: 4,
          position: "relative",
          minWidth: "138px",
          backgroundColor: selected ? "common.white" : "",
          color: selected ? "primary.light" : "",
        }}
      >
        <Typography textAlign="center">{label}</Typography>
      </Box>
      {selected && (
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            top: 2,
            right: 11,
            transform: "translate(50%, -50%)",
            bgcolor: "primary.main",
            borderRadius: "50%",
          }}
          disableRipple
        >
          <CloseIcon
            sx={{
              fontSize: "14px",
              stroke: "common.white",
              color: "common.white",
              strokeWidth: "20px",
            }}
          />
        </IconButton>
      )}
    </div>
  );
};

export default ChipButton;
