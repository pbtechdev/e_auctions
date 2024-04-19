import React from "react";
import { Stack, Typography } from "@mui/material";
import Image from "../../components/Image";
import carsSelected from "../../assets/icons/cars_selected.svg";
import homes from "../../assets/icons/homes.svg";
import gold from "../../assets/icons/gold.svg";
import offices from "../../assets/icons/offices.svg";
import plots from "../../assets/icons/plots.svg";

const Categories = () => {
  return (
    <Stack sx={{ pt: 6 }} gap={3}>
      <Typography
        sx={{
          fontSize: "28px",
          color: "primary.main",
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Categories
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack direction="row" gap={2}>
          <Image
            sx={{ maxWidth: { xs: "150px", md: "200px" } }}
            src={carsSelected}
          />
          <Image sx={{ maxWidth: { xs: "150px", md: "200px" } }} src={gold} />
        </Stack>
        <Stack direction="row" gap={2}>
          <Image sx={{ maxWidth: { xs: "150px", md: "200px" } }} src={homes} />
          <Image
            sx={{ maxWidth: { xs: "150px", md: "200px" } }}
            src={offices}
          />
        </Stack>
        <Stack direction="row" gap={2}>
          <Image sx={{ maxWidth: { xs: "150px", md: "200px" } }} src={plots} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Categories;
