import React from "react";
import { Box, Divider, Rating, Stack, Typography, styled } from "@mui/material";
import LogoWrapper from "./LogoWrapper";
import eActionLogo from "../assets/logos/eAuctionLogo.svg";
import instaLogo from "../assets/icons/ri_instagram-fill.svg";
import pinterestLogo from "../assets/icons/bi_pinterest.svg";
import facebookLogo from "../assets/icons/ic_round-facebook.svg";
import xLogo from "../assets/icons/ri_twitter-x-fill.svg";
import linkedInLogo from "../assets/icons/mdi_linkedin.svg";
import telegramLogo from "../assets/icons/ic_baseline-telegram.svg";

const WrapperBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

const StyledTypo = styled(Typography)(() => ({
  fontSize: "18px",
  padding: "15px",
}));

const Footer = () => {
  return (
    <>
      <Stack bgcolor="grey.200" direction="row" p={2}>
        <WrapperBox flex={2}>
          <Box sx={{ maxHeight: 80, maxWidth: 160 }}>
            <LogoWrapper src={eActionLogo} goto="/" />
          </Box>
          <Typography p={4} variant="body2">
            Parctipate through Eauction Parctipate through Eauction Parctipate
            through Eauction Parctipate through Eauction through Eauction
            Parctipate through Eauction Parctipate through Eauction Parctipate
            through Eauction Parctipate through Eauction
          </Typography>
        </WrapperBox>
        <WrapperBox flex={1}>
          <StyledTypo>Home</StyledTypo>
          <StyledTypo>About</StyledTypo>
          <StyledTypo>Property Search</StyledTypo>
          <StyledTypo>Categories</StyledTypo>
        </WrapperBox>
        <WrapperBox flex={1}>
          <StyledTypo>Process</StyledTypo>
          <StyledTypo>Blogs</StyledTypo>
          <StyledTypo>Contact Us</StyledTypo>
        </WrapperBox>
        <WrapperBox flex={1.5}>
          <StyledTypo>Support</StyledTypo>
          <Typography>eauctionnews@gmail.com</Typography>
          <Typography>+919999999999</Typography>
          <StyledTypo>Reviews</StyledTypo>
          <Rating sx={{ color: "primary.light" }} defaultChecked />
        </WrapperBox>
        <WrapperBox flex={1}>
          <StyledTypo>Social Media</StyledTypo>
          <Box display="flex" gap={2}>
            <LogoWrapper src={instaLogo} />
            <LogoWrapper src={pinterestLogo} />
            <LogoWrapper src={facebookLogo} />
          </Box>
          <Box display="flex" pt={2} gap={2}>
            <LogoWrapper src={xLogo} />
            <LogoWrapper src={linkedInLogo} />
            <LogoWrapper src={telegramLogo} />
          </Box>
        </WrapperBox>
      </Stack>
      <Divider sx={{ borderBottom: "1px solid" }} />
      <Typography
        variant="caption"
        component="p"
        sx={{ p: 1.5, textAlign: "center", bgcolor: "grey.200" }}
      >
        All rights reserved EAuction India Pvt Ltd | Designed by Drak
      </Typography>
    </>
  );
};

export default Footer;
