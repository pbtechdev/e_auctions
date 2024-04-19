import Header from "./Header";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

// ----------------------------------------------------------------------

const DashboardLayout = () => {
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Header />
      <Box bgcolor="common.white" width="100%">
        <Toolbar />
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
