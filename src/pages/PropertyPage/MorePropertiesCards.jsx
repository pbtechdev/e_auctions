import React from "react";
import { Box, Typography } from "@mui/material";
import AuctionCard from "../../components/AuctionCard";

const MorePropertiesCards = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          color: "primary.main",
          fontWeight: 600,
        }}
      >
        More Like This
      </Typography>
      <Box
        sx={{
          py: 2,
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(357px,1fr))",
          gap: 2,
          placeItems: "center",
        }}
      >
        <AuctionCard />
        <AuctionCard />
        <AuctionCard />
      </Box>
    </Box>
  );
};

export default MorePropertiesCards;
