import { Box, Button, Typography, styled } from "@mui/material";
import circleWithNode from "../../assets/circlewithnode.svg";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: "20px",
  padding: "25px",
  flex: 2,
  m: 2,
  color: theme.palette.common.white,
  fontWeight: 700,
  fontSize: "25px",
  lineHeight: "25px",
}));

function Catpicker() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
        flex: 2,
        margin: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.1)",
          m: "2",
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <StyledBox
            bgcolor="#28C9B6"
            sx={{
              m: "8px",
              textAlign: "top",
              paddingBottom: "60px",
              paddingRight: "90px",
            }}
          >
            Live <br />
            Properties
          </StyledBox>
          <StyledBox
            bgcolor="#FF7A00"
            sx={{
              m: "8px",
              textAlign: "end",
              paddingBottom: "60px",
              paddingLeft: "90px",
            }}
          >
            Archive <br />
            Properties
          </StyledBox>
        </Box>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <StyledBox
            bgcolor="#9528C9"
            sx={{
              m: "8px",
              textAlign: "top",
              paddingTop: "60px",
              paddingRight: "90px",
            }}
          >
            Live <br />
            vehicles
          </StyledBox>
          <StyledBox
            bgcolor="#C92828"
            sx={{
              m: "8px",
              textAlign: "end",
              paddingTop: "60px",
              paddingLeft: "90px",
            }}
          >
            Registered <br />
            Users
          </StyledBox>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "10px",
            bgcolor: "common.white",
            borderRadius: "100%",
          }}
        >
          <Box sx={{ width: "180px", height: "180px" }}>
            <img src={circleWithNode} alt="Circle with Node" />
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "common.white",
              fontWeight: "500",
              fontSize: "30px",
            }}
          >
            <Typography sx={{ fontWeight: "700", fontSize: "30px" }}>
              22.12
            </Typography>
            <Typography sx={{fontWeight: "700"}}>Properties</Typography>
            <Button sx={{ backgroundColor: "common.white", color: "#FF7A00" }}>
              View All
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Catpicker;
