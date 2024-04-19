import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const BlogCards = () => {
  return (
    <div style={{ position: "relative", maxWidth: 300 }}>
      <Card elevation={6} sx={{ borderRadius: 3 }}>
        <CardMedia>
          <Box
            sx={{
              backgroundColor: "grey.300",
              minHeight: "140px",
              maxHeight: "140px",
            }}
          />
        </CardMedia>
        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <ThumbUpIcon sx={{ color: "primary.light" }} />
                <Typography variant="body2">25</Typography>
              </Box>
              <Typography color="primary.light" variant="caption">
                04-04-2024
              </Typography>
            </Box>
          </Box>

          <Box mt={2}>
            <Typography variant="h5">
              How to Participate in Bank Auction?
            </Typography>
            <Typography minHeight="130px">
              Outlined buttons are also a lower emphasis alternative to
              contained buttons, or a higher emphasis alternative to text
              buttons.
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button sx={{ backgroundColor: "primary.light" }}>Read More</Button>
        </CardActions>
      </Card>
      <Box
        component={Paper}
        elevation={6}
        sx={{
          height: "88px",
          width: "88px",
          position: "absolute",
          top: "100px",
          left: "15px",
        }}
      />
    </div>
  );
};

export default BlogCards;
