import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Rating,
  Typography,
} from "@mui/material";
import box from "../assets/Rectangle.png";
import calenderIcon from "../assets/icons/calendar.svg";
import SellIcon from "@mui/icons-material/Sell";

const AuctionCard = () => {
  return (
    <Card
      sx={{
        minWidth: 300,
        maxWidth: 357,
        p: 3,
        borderRadius: "30px",
        color: "primary.main",
      }}
    >
      <CardMedia sx={{ position: "relative" }}>
        <img src={box} />
        <Chip
          sx={{
            position: "absolute",
            backgroundColor: "primary.light",
            color: "common.white",
            top: 25,
            left: 0,
            fontSize: ".8rem",
            borderStartStartRadius: "0px",
            borderBottomLeftRadius: "0px",
            fontWeight: 700,
          }}
          label="Auction ID :# 231922"
        />
        <Rating
          sx={{
            position: "absolute",
            top: 15,
            right: 15,
            color: "primary.light",
          }}
          max={1}
        />
      </CardMedia>
      <CardContent sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
        <Box>
          <Typography variant="button">Auction Starts</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Box component="img" src={calenderIcon} />
            02-02-2023
          </Box>
        </Box>
        <Box>
          <Typography variant="button">Type: Apartment</Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <SellIcon sx={{ color: "primary.light" }} />
            Residential
          </Box>
        </Box>
      </CardContent>
      <CardContent sx={{ p: 0 }}>
        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            textAlign: "center",
            lineHeight: "22px",
          }}
        >
          Apartment Auction by SBI in Kukatpally, Hyderabad.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "primary.main",
            textAlign: "center",
            lineHeight: "20px",
            pt: 1,
          }}
        >
          All that piece and parcel of Flat No. 101, on 1st Floor, admeasuring
          652 Sq.Ft. Carpet Area, "B Wing in the
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", p: 0, pt: 3 }}>
        <Button sx={{ backgroundColor: "primary.light", py: "4px", px: 4 }}>
          View More
        </Button>
      </CardActions>
    </Card>
  );
};

export default AuctionCard;
