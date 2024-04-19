import { Box, Paper, Stack, Typography, styled } from "@mui/material";
import React from "react";
import TextHeader from "../../components/TextHeader";
import AuctionProfile from "./AuctionProfile";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import MorePropertiesCards from "./MorePropertiesCards";

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    paddingLeft: "10rem",
    paddingRight: "10rem",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));

const auctionDetails = {
  bankDetails: "SBI",
  EMD: 1000000,
  bankName: "Bangalore",
  serviceProvider: "Public Auction",
  contactDetails: "+91 9999999999",
  village: "Baradanapura",
  hobli: "Jayapura",
  taluk: "Mysore",
  district: "Mysore",
  syNo: "8/2",
  area: "1 Acre 14 Guntas",
  state: "Karnataka",
  city: "Mysuru",
  areaOrTown: "Jayapura Hobli",
  borrowerName: "M/s. Green Buds Agro Farm Company Pvt. Ltd",
  assetCategory: "Residential",
  propertyType: "Plot",
  auctionType: "Sarfaesi Auction",
  auctionStartTime: "19-04-2024 11:00 AM",
  auctionEndDate: "19-04-2024 01:00 PM",
  applicationSubmisionDate: "18-04-2024 05:00 PM",
};

const StyledTypograpy = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem",
  lineHeight: "32px",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  color: theme.palette.primary.main,
}));

const contentHeaderStyles = {
  fontSize: "35px",
  lineHeight: "44px",
  fontWeight: 700,
  color: "primary.main",
};

export const subHeaderStyles = {
  fontSize: "28px",
  color: "primary.main",
  fontWeight: 600,
  pl: 1,
};

const PropertyPage = () => {
  return (
    <StyledBox>
      <Stack sx={{ gap: 3, pt: 3 }}>
        <TextHeader>Property Details</TextHeader>
        <AuctionProfile />
        <Paper sx={{ borderRadius: "30px", padding: "1.8rem" }}>
          <Typography sx={contentHeaderStyles}>
            Apartment Auction by SBI in Kukatpally, Hyderabad.Special Offer
            Price by Bank
          </Typography>
          <Stack direction="row" spacing={4}>
            <Box width="50%" p={1}>
              <StyledTypograpy>
                Bank Details : {auctionDetails.bankDetails}
              </StyledTypograpy>

              <StyledTypograpy>EMD : {auctionDetails.EMD}</StyledTypograpy>

              <StyledTypograpy>
                Bank Name : {auctionDetails.bankName}
              </StyledTypograpy>

              <StyledTypograpy>
                Service Provider : {auctionDetails.serviceProvider}
              </StyledTypograpy>
            </Box>
            <Box width="50%" p={1}>
              <StyledTypograpy>
                Contact Details : {auctionDetails.contactDetails}
              </StyledTypograpy>
            </Box>
          </Stack>
          <Box sx={{ backgroundColor: "grey.200", py: 2 }}>
            <Typography sx={subHeaderStyles}>Description</Typography>
            <Stack direction="row" spacing={4}>
              <Box width="50%" p={1}>
                <StyledTypograpy>
                  Village : {auctionDetails.village}
                </StyledTypograpy>
                <StyledTypograpy>
                  Hobli : {auctionDetails.hobli}
                </StyledTypograpy>
                <StyledTypograpy>
                  Taluk : {auctionDetails.taluk}
                </StyledTypograpy>
                <StyledTypograpy>
                  District : {auctionDetails.hobli}
                </StyledTypograpy>
                <StyledTypograpy>
                  Sy.No. : {auctionDetails.syNo}
                </StyledTypograpy>
              </Box>
              <Box width="50%" p={1}>
                <StyledTypograpy>Area : {auctionDetails.area}</StyledTypograpy>
                <StyledTypograpy>
                  Province/State : {auctionDetails.state}
                </StyledTypograpy>
                <StyledTypograpy>
                  City/Town : {auctionDetails.city}
                </StyledTypograpy>
                <StyledTypograpy>
                  Area/Town : {auctionDetails.areaOrTown}
                </StyledTypograpy>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Typography sx={subHeaderStyles}>Description</Typography>
            <StyledTypograpy>
              Borrower Name : {auctionDetails.borrowerName}
            </StyledTypograpy>
            <StyledTypograpy>
              Asset Category : {auctionDetails.assetCategory}
            </StyledTypograpy>
            <StyledTypograpy>
              Property Type : {auctionDetails.propertyType}
            </StyledTypograpy>
            <StyledTypograpy>
              Auction Type : {auctionDetails.auctionType}
            </StyledTypograpy>
            <StyledTypograpy>
              Auction Start Time : {auctionDetails.auctionStartTime}
            </StyledTypograpy>
            <StyledTypograpy>
              Auction End Date : {auctionDetails.auctionEndDate}
            </StyledTypograpy>
            <StyledTypograpy>
              Application Submision Date :
              {auctionDetails.applicationSubmisionDate}
            </StyledTypograpy>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              pt: 2,
            }}
          >
            <Box
              sx={{
                height: "100px",
                width: "362px",
                borderRadius: "30px",
                fontSize: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "primary.light",
                color: "common.white",
                gap: 2,
                fontWeight: 700,
              }}
            >
              <InsertDriveFileIcon fontSize="large" />
              Sale Notice
            </Box>
          </Box>
        </Paper>
        <MorePropertiesCards />
      </Stack>
    </StyledBox>
  );
};

export default PropertyPage;
