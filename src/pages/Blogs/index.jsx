import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import BlogCards from "../HomePage/BlogCards";
import FloatingLabelSelect from "../../components/FloatingLabelSelect";

const StyledHeader = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 600,
  textAlign: "center",
  justifyContent: "center",
  padding: "20px",
}));

function BlogsPage() {
  const numCards = 16;

  const numRows = Math.ceil(numCards / 4);

  const rows = [...Array(numRows)].map((_row, rowIndex) =>
    Array.from(
      { length: Math.min(4, numCards - rowIndex * 4) },
      (_, colIndex) => rowIndex * 4 + colIndex
    )
  );

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          backgroundColor: "primary.light",
          height: "25vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <StyledHeader color="common.white">Blogs</StyledHeader>
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: "99",
            top: "50%",
            backgroundColor: "common.white",
            justifyContent: "center",
            width: { sm: "540px", md: "950px" },
            height: { md: "140px" },
            borderRadius: "25px",
            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Box sx={{ padding: "8px" }}>
            <FloatingLabelSelect label="Search" hideLabel />
            <Box
              sx={{
                textAlign: "center",
                justifyContent: "end",
                padding: "10px",
                marginBottom: 5,
              }}
            >
              <Button sx={{ display: "inline-block" }}>Search</Button>
            </Box>{" "}
          </Box>
        </Box>
      </Box>
      <Container sx={{ p: 3, marginTop: 10 }}>
        {rows.map((row, rowIndex) => (
          <Grid container spacing={2} key={rowIndex}>
            {row.map((_, index) => (
              <Grid
                item
                xs={3}
                key={index}
                sx={{ marginTop: "8px", marginBottom: "8px" }}
              >
                <BlogCards />
              </Grid>
            ))}
          </Grid>
        ))}
      </Container>
    </Box>
  );
}

export default BlogsPage;
