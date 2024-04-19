import React from "react";
import { Box, Typography } from "@mui/material";
import auctionIcon from "../../assets/icons/mingcute_auction-fill.svg";
import auctionIconBlue from "../../assets/icons/mingcute_auction-fill_blue.svg";
import Image from "../../components/Image";

const PropertyCountChip = ({ selected }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        flex: 1,
        p: 1,
        backgroundColor: selected ? "primary.main" : "common.white",
        boxShadow: "1px 1px 10px 5px #0000001A",
        color: selected ? "common.white" : "common.black",
      }}
    >
      <Image
        sx={{ maxHeight: 50, maxWidth: 50 }}
        src={selected ? auctionIcon : auctionIconBlue}
        alt="auction-icon"
      />
      <Box>
        <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>256</Typography>
        <Typography>Properties in Auction</Typography>
      </Box>
    </Box>
  );
};

export default PropertyCountChip;
