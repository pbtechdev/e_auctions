import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, styled } from "@mui/material";

const DummyBox = styled(Box)(({ theme }) => ({
  height: "200px",
  width: "400px",
  backgroundColor: theme.palette.grey[300],
  borderRadius: theme.spacing(4),
}));

function AuctionsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <br />,
    prevArrow: <br />,
  };
  return (
    <Box sx={{ px: 12 }} className="slider-container">
      <Slider {...settings}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DummyBox />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DummyBox />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DummyBox />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DummyBox />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DummyBox />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DummyBox />
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <DummyBox />
          </Box>
        </Box>
      </Slider>
    </Box>
  );
}

export default AuctionsCarousel;
