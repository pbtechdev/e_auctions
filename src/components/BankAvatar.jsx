import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import grayImage from "../assets/Rectangle.png";

const BankAvatar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexDirection: "column",
      }}
    >
      <Avatar sx={{ width: "79px", height: "79px" }} src={grayImage} />
      <Typography fontSize="24px" variant="h6">
        SBI
      </Typography>
    </Box>
  );
};

export default BankAvatar;
