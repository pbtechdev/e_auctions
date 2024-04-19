import React from "react";
import { Box, Button, Paper, Stack, Typography, styled } from "@mui/material";
import PropertyCountChip from "./PropertyCountChip";
import Categories from "./Categories";
import BankAvatar from "../../components/BankAvatar";
import FloatingLabelSelect from "../../components/FloatingLabelSelect";
import AuctionsCarousel from "../../components/AuctionsCarousel";
import India from "@react-map/india";
import BlogCards from "./BlogCards";
import ChipButton from "./ChipButton";
import { useResponsive } from "../../hooks/useResponsive";
import Catpicker from "./Catpicker";

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  color: theme.palette.primary.main,
  fontWeight: 600,
  textAlign: "center",
}));

const chipHeaderStyles = {
  pt: 3,
  pb: 2,
  fontSize: "32px",
  fontWeight: 600,
};

const HomePage = () => {
  const isDesktop = useResponsive("up", "sm");
  return (
    <Stack>
      <Box sx={{ height: "360px", backgroundColor: "grey.300" }} />
      <Box>
        <StyledHeader>Categories</StyledHeader>
        <Catpicker />
      </Box>
      <Stack
        spacing={8}
        sx={{
          backgroundColor: "primary.light",
          px: { xs: 1, sm: 6 },
          py: 6,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {!isDesktop && (
          <Typography
            variant="h2"
            sx={{ color: "common.white", textAlign: "center" }}
          >
            Let's Find a Best Property!
          </Typography>
        )}
        <Box sx={{ flex: 1, px: { xs: 0, sm: 10 } }}>
          <Box component={Paper} sx={{ px: 6, py: 4, borderRadius: "30px" }}>
            <StyledHeader>Get Started</StyledHeader>
            <FloatingLabelSelect label="Category" />
            <FloatingLabelSelect label="State" />
            <FloatingLabelSelect label="City" />
            <FloatingLabelSelect label="Bank" />
            <Box sx={{ display: "flex", pt: 4, justifyContent: "center" }}>
              <Button sx={{ px: 6 }}>Search</Button>
            </Box>
          </Box>
        </Box>
        {isDesktop && (
          <Box
            sx={{
              flex: 1.5,
              marginLeft: "5px",
              display: "flex",
              flexDirection: "column",
              color: "common.white",
            }}
          >
            <Typography variant="h2" sx={{ color: "common.white" }}>
              Let's Find a Best Property!
            </Typography>
            <Box>
              <Typography sx={chipHeaderStyles}>Cities</Typography>
              <Stack>
                <Box display="flex" gap={2}>
                  <ChipButton label="Hyderabad" />
                  <ChipButton label="Vishakapatnam" />
                  <ChipButton label="Vishakapatnam" />
                  <ChipButton label="Vishakapatnam" />
                </Box>
                <Box display="flex" justifyContent="center" gap={2} pt={2}>
                  <ChipButton label="Vishakapatnam" />
                  <ChipButton label="Vishakapatnam" />
                  <ChipButton label="Vishakapatnam" selected />
                </Box>
              </Stack>
            </Box>

            <Box>
              <Typography sx={chipHeaderStyles}>Categories</Typography>
              <Box display="flex" gap={2} justifyContent="center">
                <ChipButton label="Vehicles" />
                <ChipButton label="Open Plots" />
                <ChipButton label="Homes" selected />
                <ChipButton label="Commercial" />
              </Box>
            </Box>
            <Box>
              <Typography sx={chipHeaderStyles}>Banks</Typography>
              <Stack>
                <Box display="flex" gap={2}>
                  <ChipButton label="SBI" />
                  <ChipButton label="HDFC" />
                  <ChipButton label="Axis Bank" />
                  <ChipButton label="ICICI" />
                </Box>
                <Box display="flex" justifyContent="center" gap={2} pt={2}>
                  <ChipButton label="HDFC" />
                  <ChipButton label="Axis Bank" />
                  <ChipButton label="ICICI" selected />
                </Box>
              </Stack>
            </Box>
          </Box>
        )}
      </Stack>
      <Stack
        sx={{
          flexDirection: { sm: "column", md: "row" },
          gap: { xs: 2, md: 0 },
        }}
      >
        <PropertyCountChip selected />
        <PropertyCountChip />
        <PropertyCountChip />
        <PropertyCountChip />
      </Stack>
      <Categories />
      <Stack sx={{ pt: 6 }} gap={3}>
        <StyledHeader>Popular Banks</StyledHeader>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            flexWrap: "wrap",
          }}
        >
          <BankAvatar />
          <BankAvatar />
          <BankAvatar />
          <BankAvatar />
          <BankAvatar />
          <BankAvatar />
          <BankAvatar />
          <BankAvatar />
        </Box>
        <Box sx={{ marginInline: "auto" }}>
          <Button sx={{ px: 3, backgroundColor: "primary.light" }}>
            View All
          </Button>
        </Box>
      </Stack>
      <Stack pt={5} spacing={2}>
        <StyledHeader>States</StyledHeader>
        <Stack py={6} direction="row" flexWrap="wrap">
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: "48px" }}
                color="primary.light"
                variant="h2"
              >
                Find Properties by
                <br />
                States !!
              </Typography>
              <Typography sx={{ fontSize: "64px", fontWeight: 700 }}>
                10000+
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }} position="relative">
            <India hoverColor="#288CC9" />
          </Box>
        </Stack>
      </Stack>
      <Stack>
        <StyledHeader>Trending Auctions</StyledHeader>
        <AuctionsCarousel />
      </Stack>
      <Stack py={5} spacing={2} position="relative">
        <StyledHeader>Recent Blogs</StyledHeader>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 2,
          }}
        >
          <BlogCards />
          <BlogCards />
          <BlogCards />
          <BlogCards />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            pt: 3,
          }}
        >
          <Button sx={{ px: 3, backgroundColor: "primary.light" }}>
            Explore Blogs
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default HomePage;
