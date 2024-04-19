import { Navigate, useRoutes } from "react-router-dom";
import PropertyPage from "./pages/PropertyPage";
import DashboardLayout from "./layout/DashboardLayout";
import AboutUs from "./pages/aboutUs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { Box, Toolbar } from "@mui/material";
import Header from "./layout/Header";
import BlogsPage from "./pages/Blogs";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/home",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/propery-search",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <PropertyPage />,
        },
      ],
    },
    {
      path: "/about",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <AboutUs />,
        },
      ],
    },
    {
      path: "/categories",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <div>categories</div>,
        },
      ],
    },
    {
      path: "/process",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <div>process</div>,
        },
      ],
    },
    {
      path: "/blogs",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <BlogsPage/>,
        },
      ],
    },
    {
      path: "/contact-us",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <div>contact-us</div>,
        },
      ],
    },
    {
      path: "/sign-up",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <div>sign-up</div>,
        },
      ],
    },
    {
      path: "/",
      children: [
        {
          index: true,
          element: (
            <Box sx={{ display: "flex", width: "100%" }}>
              <Header />
              <Box bgcolor="common.white" width="100%">
                <Toolbar />
                <Login />
              </Box>
            </Box>
          ),
        },
      ],
    },
  ]);
}
