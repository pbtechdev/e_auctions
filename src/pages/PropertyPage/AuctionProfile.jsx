import { Box, Chip, Paper } from "@mui/material";
import React from "react";

const commonStyles = {
  backgroundColor: "primary.light",
  color: "common.white",
  fontWeight: 700,
  position: "absolute",
};

const AuctionProfile = () => {
  return (
    <Paper sx={{ height: "462px", borderRadius: "30px", padding: "2.5rem" }}>
      <Box
        sx={{
          backgroundColor: "grey.300",
          borderRadius: "30px",
          height: "100%",
          width: "100%",
          position: "relative",
        }}
      >
        <Chip
          sx={{ ...commonStyles, top: 20, left: 20, fontSize: "1rem" }}
          label="Auction ID :# 231922"
        />
        <Chip
          sx={{
            ...commonStyles,
            bottom: 20,
            right: 20,
            fontSize: "2rem",
            px: "1rem",
            py: "2rem",
          }}
          label="Reserve Price : ₹20,000"
        />
      </Box>
    </Paper>
  );
};

export default AuctionProfile;
